import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { GroupService } from '../../core/groups/services/group.service';
import { AuthService } from '../../core/auth/services/auth.service';
import { ExpenseService } from '../../core/expenses/services/expense.service';
import { SettlementService } from '../../core/settlements/services/settlement.service';
import { Settlement, SimplifiedDebt } from '../../core/settlements/models/settlement.model';
import {
  GroupDetail,
  GroupMember,
  GroupSummary,
  UserSearchResult,
} from '../../core/groups/models/group.model';
import {
  CreateExpenseRequest,
  Expense,
  GroupBalances,
  MemberBalance,
  SplitType,
} from '../../core/expenses/models/expense.model';
import { ApiErrorResponse } from '../../core/auth/models/auth.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-splitwise',
  imports: [FormsModule, CommonModule],
  templateUrl: './splitwise.html',
  styleUrl: './splitwise.scss',
})
export class Splitwise implements OnInit {
  private readonly groupService = inject(GroupService);
  private readonly authService = inject(AuthService);
  private readonly expenseService = inject(ExpenseService);
  private readonly settlementService = inject(SettlementService);

  groups: GroupSummary[] = [];
  selectedGroup: GroupDetail | null = null;
  balances: GroupBalances | null = null;
  expenses: Expense[] = [];
  simplifiedDebts: SimplifiedDebt[] = [];
  settlements: Settlement[] = [];

  settlementToUserId = '';
  settlementAmount: number | null = null;
  settlementNote = '';
  settlementSaving = false;

  groupName = '';
  groupDescription = '';
  showCreateForm = false;

  expenseDescription = '';
  expenseAmount: number | null = null;
  splitType: SplitType = 'EQUAL';
  paidByUserId = '';
  participantIds = new Set<string>();
  exactShares: Record<string, number> = {};
  percentShares: Record<string, number> = {};

  memberSearch$ = new Subject<string>();
  filteredUsers$ = this.memberSearch$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter((term) => term.trim().length >= 2),
    switchMap((term) => {
      if (!this.selectedGroup) {
        return of([]);
      }
      this.memberSearchLoading = true;
      return this.groupService.searchUsers(this.selectedGroup.id, term.trim()).pipe(
        catchError(() => of([])),
        tap(() => (this.memberSearchLoading = false))
      );
    })
  );

  memberSearchLoading = false;
  errorMsg = '';
  loading = false;
  expenseSaving = false;
  isAdmin = false;

  readonly splitTypes: SplitType[] = ['EQUAL', 'EXACT', 'PERCENTAGE'];

  ngOnInit(): void {
    this.loadGroups();
  }

  get currentUserId(): string | null {
    return this.authService.getCurrentUser()?.id ?? null;
  }

  get activeMembers(): GroupMember[] {
    return this.selectedGroup?.members ?? [];
  }

  loadGroups(): void {
    this.loading = true;
    this.errorMsg = '';
    this.groupService.listMyGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
        this.loading = false;
      },
      error: (err) => this.handleError(err),
    });
  }

  openCreateForm(): void {
    this.showCreateForm = true;
    this.groupName = '';
    this.groupDescription = '';
  }

  createGroup(): void {
    if (!this.groupName.trim()) {
      this.errorMsg = 'Group name is required';
      return;
    }
    this.loading = true;
    this.groupService
      .createGroup({
        name: this.groupName.trim(),
        description: this.groupDescription.trim() || undefined,
      })
      .subscribe({
        next: (group) => {
          this.showCreateForm = false;
          this.loading = false;
          this.selectGroup(group.id);
          this.loadGroups();
        },
        error: (err) => this.handleError(err),
      });
  }

  selectGroup(groupId: string): void {
    this.loading = true;
    this.errorMsg = '';
    this.groupService.getGroup(groupId).subscribe({
      next: (group) => {
        this.selectedGroup = group;
        this.isAdmin = group.myRole === 'ADMIN';
        this.initExpenseForm(group);
        this.loadGroupFinancials(groupId);
      },
      error: (err) => this.handleError(err),
    });
  }

  private initExpenseForm(group: GroupDetail): void {
    const defaultPayer = this.currentUserId ?? group.members[0]?.userId ?? '';
    this.paidByUserId = defaultPayer;
    this.participantIds = new Set(group.members.map((m) => m.userId));
    this.exactShares = {};
    this.percentShares = {};
    for (const member of group.members) {
      this.exactShares[member.userId] = 0;
      this.percentShares[member.userId] = 0;
    }
    this.expenseDescription = '';
    this.expenseAmount = null;
    this.splitType = 'EQUAL';
  }

  private loadGroupFinancials(groupId: string): void {
    forkJoin({
      balances: this.expenseService.getBalances(groupId),
      expenses: this.expenseService.listExpenses(groupId, 0, 20),
      debts: this.settlementService.getSimplifiedDebts(groupId),
      settlements: this.settlementService.listSettlements(groupId),
    }).subscribe({
      next: ({ balances, expenses, debts, settlements }) => {
        this.balances = balances;
        this.expenses = expenses.data;
        this.simplifiedDebts = debts;
        this.settlements = settlements;
        this.resetSettlementForm();
        this.loading = false;
      },
      error: (err) => this.handleError(err),
    });
  }

  private resetSettlementForm(): void {
    this.settlementToUserId = '';
    this.settlementAmount = null;
    this.settlementNote = '';
  }

  prefillSettlement(debt: SimplifiedDebt): void {
    this.settlementToUserId = debt.toUserId;
    this.settlementAmount = Number(debt.amount);
    this.settlementNote = `Payment to ${debt.toUserDisplayName}`;
  }

  canSettleDebt(debt: SimplifiedDebt): boolean {
    return debt.fromUserId === this.currentUserId;
  }

  createSettlement(): void {
    if (!this.selectedGroup || !this.settlementToUserId || this.settlementAmount == null) {
      this.errorMsg = 'Select recipient and amount';
      return;
    }
    if (this.settlementAmount <= 0) {
      this.errorMsg = 'Amount must be positive';
      return;
    }

    this.settlementSaving = true;
    this.errorMsg = '';
    this.settlementService
      .createSettlement(this.selectedGroup.id, {
        toUserId: this.settlementToUserId,
        amount: Number(this.settlementAmount),
        note: this.settlementNote.trim() || undefined,
      })
      .subscribe({
        next: () => {
          this.settlementSaving = false;
          this.selectGroup(this.selectedGroup!.id);
        },
        error: (err) => {
          this.settlementSaving = false;
          this.handleError(err);
        },
      });
  }

  completeSettlement(settlementId: string): void {
    if (!this.selectedGroup) {
      return;
    }
    this.settlementService
      .completeSettlement(this.selectedGroup.id, settlementId)
      .subscribe({
        next: () => this.selectGroup(this.selectedGroup!.id),
        error: (err) => this.handleError(err),
      });
  }

  cancelSettlement(settlementId: string): void {
    if (!this.selectedGroup) {
      return;
    }
    this.settlementService
      .cancelSettlement(this.selectedGroup.id, settlementId)
      .subscribe({
        next: () => this.selectGroup(this.selectedGroup!.id),
        error: (err) => this.handleError(err),
      });
  }

  canActOnSettlement(settlement: Settlement): boolean {
    const uid = this.currentUserId;
    return (
      settlement.status === 'PENDING' &&
      !!uid &&
      (settlement.fromUserId === uid || settlement.toUserId === uid)
    );
  }

  settlementStatusLabel(status: Settlement['status']): string {
    return status.charAt(0) + status.slice(1).toLowerCase();
  }

  onMemberSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.memberSearch$.next(value);
  }

  addMember(user: UserSearchResult): void {
    if (!this.selectedGroup || !this.isAdmin) {
      return;
    }
    this.groupService.addMember(this.selectedGroup.id, user.email).subscribe({
      next: () => this.selectGroup(this.selectedGroup!.id),
      error: (err) => this.handleError(err),
    });
  }

  removeMember(userId: string): void {
    if (!this.selectedGroup) {
      return;
    }
    this.groupService.removeMember(this.selectedGroup.id, userId).subscribe({
      next: () => this.selectGroup(this.selectedGroup!.id),
      error: (err) => this.handleError(err),
    });
  }

  toggleParticipant(userId: string, checked: boolean): void {
    if (checked) {
      this.participantIds.add(userId);
    } else {
      this.participantIds.delete(userId);
    }
  }

  isParticipant(userId: string): boolean {
    return this.participantIds.has(userId);
  }

  createExpense(): void {
    if (!this.selectedGroup || this.expenseAmount == null || this.expenseAmount <= 0) {
      this.errorMsg = 'Enter a valid amount';
      return;
    }
    if (!this.expenseDescription.trim()) {
      this.errorMsg = 'Description is required';
      return;
    }

    const request = this.buildExpenseRequest();
    if (!request) {
      return;
    }

    this.expenseSaving = true;
    this.errorMsg = '';
    this.expenseService.createExpense(this.selectedGroup.id, request).subscribe({
      next: () => {
        this.expenseSaving = false;
        this.selectGroup(this.selectedGroup!.id);
      },
      error: (err) => {
        this.expenseSaving = false;
        this.handleError(err);
      },
    });
  }

  private buildExpenseRequest(): CreateExpenseRequest | null {
    const amount = Number(this.expenseAmount);
    const base: CreateExpenseRequest = {
      description: this.expenseDescription.trim(),
      amount,
      paidByUserId: this.paidByUserId || undefined,
      splitType: this.splitType,
    };

    if (this.splitType === 'EQUAL') {
      const participants = [...this.participantIds];
      if (!participants.length) {
        this.errorMsg = 'Select at least one participant';
        return null;
      }
      return { ...base, participantUserIds: participants };
    }

    const splits = this.activeMembers.map((member) => ({
      userId: member.userId,
      shareAmount: this.splitType === 'EXACT' ? Number(this.exactShares[member.userId] ?? 0) : undefined,
      sharePercent: this.splitType === 'PERCENTAGE' ? Number(this.percentShares[member.userId] ?? 0) : undefined,
    }));

    if (this.splitType === 'EXACT') {
      const hasPositive = splits.some((s) => (s.shareAmount ?? 0) > 0);
      if (!hasPositive) {
        this.errorMsg = 'Enter share amounts';
        return null;
      }
    } else {
      const percentSum = splits.reduce((sum, s) => sum + (s.sharePercent ?? 0), 0);
      if (Math.abs(percentSum - 100) > 0.01) {
        this.errorMsg = 'Percentages must sum to 100';
        return null;
      }
    }

    return { ...base, splits };
  }

  balanceLabel(balance: MemberBalance): string {
    const value = Number(balance.netBalance);
    if (value > 0) {
      return `gets back ${value.toFixed(2)}`;
    }
    if (value < 0) {
      return `owes ${Math.abs(value).toFixed(2)}`;
    }
    return 'settled up';
  }

  balanceClass(balance: MemberBalance): string {
    const value = Number(balance.netBalance);
    if (value > 0) {
      return 'positive';
    }
    if (value < 0) {
      return 'negative';
    }
    return 'neutral';
  }

  clearSelection(): void {
    this.selectedGroup = null;
    this.balances = null;
    this.expenses = [];
    this.simplifiedDebts = [];
    this.settlements = [];
    this.isAdmin = false;
  }

  private handleError(err: HttpErrorResponse): void {
    this.loading = false;
    this.memberSearchLoading = false;
    const apiError = err.error as ApiErrorResponse | undefined;
    this.errorMsg = apiError?.message ?? 'Something went wrong. Please try again.';
  }
}

export type SplitType = 'EQUAL' | 'EXACT' | 'PERCENTAGE';

export interface ExpenseSplitLineRequest {
  userId: string;
  shareAmount?: number;
  sharePercent?: number;
}

export interface CreateExpenseRequest {
  description: string;
  amount: number;
  paidByUserId?: string;
  expenseDate?: string;
  splitType: SplitType;
  participantUserIds?: string[];
  splits?: ExpenseSplitLineRequest[];
}

export interface ExpenseSplit {
  id: string;
  userId: string;
  displayName: string;
  shareAmount: number;
  sharePercent: number | null;
}

export interface Expense {
  id: string;
  groupId: string;
  paidByUserId: string;
  paidByDisplayName: string;
  description: string;
  amount: number;
  currencyCode: string;
  expenseDate: string;
  splitType: SplitType;
  splits: ExpenseSplit[];
  createdAt: string;
}

export interface ExpensePage {
  data: Expense[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface MemberBalance {
  userId: string;
  displayName: string;
  email: string;
  netBalance: number;
}

export interface GroupBalances {
  groupId: string;
  currencyCode: string;
  balances: MemberBalance[];
}

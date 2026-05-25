export type SettlementStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export interface SimplifiedDebt {
  fromUserId: string;
  fromUserDisplayName: string;
  toUserId: string;
  toUserDisplayName: string;
  amount: number;
}

export interface Settlement {
  id: string;
  groupId: string;
  fromUserId: string;
  fromUserDisplayName: string;
  toUserId: string;
  toUserDisplayName: string;
  amount: number;
  status: SettlementStatus;
  note: string | null;
  settledAt: string | null;
  createdAt: string;
}

export interface CreateSettlementRequest {
  fromUserId?: string;
  toUserId: string;
  amount: number;
  note?: string;
}

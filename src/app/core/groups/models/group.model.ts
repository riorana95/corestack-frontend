export type GroupRole = 'ADMIN' | 'MEMBER';
export type GroupMemberStatus = 'ACTIVE' | 'LEFT';

export interface GroupSummary {
  id: string;
  name: string;
  description: string | null;
  currencyCode: string;
  memberCount: number;
  myRole: GroupRole;
  updatedAt: string;
}

export interface GroupMember {
  id: string;
  userId: string;
  email: string;
  displayName: string;
  role: GroupRole;
  status: GroupMemberStatus;
  joinedAt: string;
}

export interface GroupDetail {
  id: string;
  name: string;
  description: string | null;
  currencyCode: string;
  createdByUserId: string;
  myRole: GroupRole;
  members: GroupMember[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateGroupRequest {
  name: string;
  description?: string;
  currencyCode?: string;
}

export interface UserSearchResult {
  id: string;
  email: string;
  displayName: string;
}

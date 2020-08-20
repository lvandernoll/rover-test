export interface Assignment {
  id: number;
  title: string;
  description: string;
  pointsMaximum: number;
}

export type Status = 'REVIEW' | 'ACCEPTED' | 'REJECTED';

export interface Report {
  id: number;
  assignmentId: number;
  playerId: number;
  status: Status;
  pointsGiven?: number;
}

export interface UserAuth {
  email: string;
}

export interface LoginResponse {
  token: string;
}

export interface ErrorResponse {
  error: string;
}

export interface UserRole {
  id: number;
  name: string;
  level: number;
}

export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

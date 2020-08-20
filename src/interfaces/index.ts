export interface Assignment {
  id: number;
  title: string;
  description: string;
  pointsMaximum: number;
}

export type AssignmentRequest = Omit<Assignment, 'id'>;

export type Status = 'REVIEW' | 'ACCEPTED' | 'REJECTED';

export interface Report {
  id: number;
  assignmentId: number;
  playerId: number;
  status: Status;
  pointsGiven?: number;
}

export interface ErrorResponse {
  error: string;
}

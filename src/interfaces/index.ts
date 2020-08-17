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

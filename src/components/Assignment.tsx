import React from 'react';
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardContent,
  CardFooter,
} from 'components/bulma/components/Card';
import { Tag } from 'components/bulma/elements/Tags/index';

const assignmentStatusMap = {
  REVIEW: 'is-info',
  ACCEPTED: 'is-success',
  REJECTED: 'is-danger',
} as const;

type AssignmentStatus = keyof typeof assignmentStatusMap;

type AssignmentProps = {
  title: string;
  points: number;
  description: string;
  status?: AssignmentStatus;
  progressStatus?: boolean;
  noFooter?: boolean;
  onClick?: () => void;
};

const Assignment: React.FC<AssignmentProps> = ({
  title,
  points,
  description,
  status,
  noFooter,
  progressStatus,
  onClick,
}) => (
  <Card className="column is-one-third is-4">
    <CardHeader>
      <CardHeaderTitle>
        <span className="mr-5">{title}</span>
        {progressStatus && <Tag color="info">{status}</Tag>}
      </CardHeaderTitle>
      <CardHeaderIcon>{`${points}pt`}</CardHeaderIcon>
    </CardHeader>
    <CardContent>{description}</CardContent>
    {!noFooter && (
      <CardFooter>
        <span>
          <button className="button is-info is-left" onClick={onClick}>
            Submit this assignment
          </button>
        </span>
      </CardFooter>
    )}
  </Card>
);

export default Assignment;

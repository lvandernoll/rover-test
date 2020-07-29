import React from 'react';
import classnames from 'classnames';
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardContent,
  CardFooter,
  CardFooterItem,
} from 'components/bulma/components/Card';

const assignmentStatusMap = {
  SUBMITTED: 'is-info',
  ACCEPTED: 'is-success',
  REJECTED: 'is-danger',
} as const;

type AssignmentStatus = keyof typeof assignmentStatusMap;

type AssignmentProps = {
  title: string;
  points: number;
  description: string;
  status?: AssignmentStatus;
  noFooter?: boolean;
  onClick?: () => void;
};

const getAssignmentColor = (status: AssignmentStatus): string =>
  assignmentStatusMap[status];

const Assignment: React.FC<AssignmentProps> = ({
  title,
  points,
  description,
  status,
  noFooter,
  onClick,
}) => (
  <Card className="block">
    <CardHeader>
      <CardHeaderTitle>{title}</CardHeaderTitle>
      <CardHeaderIcon>{`${points}pt`}</CardHeaderIcon>
    </CardHeader>
    <CardContent>{description}</CardContent>
    {!noFooter && (
      <CardFooter>
        <CardFooterItem>
          {status ? (
            <div
              className={classnames(
                'notification is-capitalized',
                getAssignmentColor(status),
              )}
              style={{ borderRadius: '0' }}
            >
              {status.toLowerCase()}
            </div>
          ) : (
            <button
              className="button is-info"
              style={{ borderRadius: '0', border: 'none' }}
              onClick={onClick}
            >
              Submit this assignment
            </button>
          )}
        </CardFooterItem>
      </CardFooter>
    )}
  </Card>
);

export default Assignment;

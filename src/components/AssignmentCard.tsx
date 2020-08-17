import React from 'react';
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardContent,
  CardFooter,
  CardFooterItem,
} from 'components/bulma/components/Card';
import { Tag } from 'components/bulma/elements/Tags';
import { Column } from './bulma/columns';
import { Assignment, Report } from 'interfaces';

const assignmentStatusMap = {
  REVIEW: 'info',
  ACCEPTED: 'success',
  REJECTED: 'danger',
} as const;

type AssignmentProps = {
  assignment: Assignment;
  report?: Report;
  noFooter?: boolean;
  onClick?: () => void;
};

const AssignmentCard: React.FC<AssignmentProps> = ({
  assignment,
  report,
  noFooter,
  onClick,
}) => (
  <Column size={4}>
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          <span>{assignment.title}</span>
          {report && report.status !== 'ACCEPTED' && (
            <Tag
              className="ml-5 is-capitalized"
              color={assignmentStatusMap[report.status]}
            >
              {report.status.toLowerCase()}
            </Tag>
          )}
        </CardHeaderTitle>
        <CardHeaderIcon>
          {report?.status === 'ACCEPTED'
            ? report.pointsGiven
            : assignment.pointsMaximum}
          pt
        </CardHeaderIcon>
      </CardHeader>
      <CardContent>{assignment.description}</CardContent>
      {!noFooter &&
        report?.status !== 'ACCEPTED' &&
        report?.status !== 'REVIEW' && (
          <CardFooter>
            <CardFooterItem>
              <button
                className="button is-info"
                style={{ marginRight: 'auto' }}
                onClick={onClick}
              >
                Submit this assignment
              </button>
            </CardFooterItem>
          </CardFooter>
        )}
    </Card>
  </Column>
);

export default AssignmentCard;

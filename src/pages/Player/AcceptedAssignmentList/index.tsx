import React from 'react';
import AssignmentList from 'components/AssignmentList';
import { Report } from 'interfaces';

const PlayerAcceptedAssignmentList: React.FC = () => (
  <AssignmentList
    role="PLAYER"
    reportFilter={(r?: Report) => !!(r && r.status === 'ACCEPTED')}
  />
);

export default PlayerAcceptedAssignmentList;

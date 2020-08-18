import React from 'react';
import { Title, Table, IconContainer } from 'components/bulma/elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Report, Assignment } from 'interfaces';

const ReportList: React.FC = () => {
  const verticalAlignStyle: React.CSSProperties = { verticalAlign: 'middle' };
  const buttonNoStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const players = [
    {
      id: 1,
      firstName: 'Luuk',
      lastName: 'Gille',
    },
  ];
  const assignments: Assignment[] = [
    {
      id: 1,
      title: 'Read a book',
      description: 'Read a book to become more knowledgeable',
      pointsMaximum: 2,
    },
  ];
  const reports: Report[] = [
    {
      id: 1,
      assignmentId: 1,
      playerId: 2,
      status: 'REJECTED',
    },
    {
      id: 2,
      assignmentId: 1,
      playerId: 1,
      status: 'REVIEW',
    },
    {
      id: 3,
      assignmentId: 1,
      playerId: 1,
      status: 'REVIEW',
    },
    {
      id: 3,
      assignmentId: 1,
      playerId: 1,
      status: 'REVIEW',
    },
    {
      id: 4,
      assignmentId: 1,
      playerId: 1,
      status: 'REVIEW',
    },
    {
      id: 5,
      assignmentId: 1,
      playerId: 1,
      status: 'REVIEW',
    },
  ];

  return (
    <>
      <Title>Reports</Title>
      <Table hoverable striped fullWidth>
        <thead>
          <Table.Row>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th align="center">Points</th>
            <th align="center">Review</th>
          </Table.Row>
        </thead>
        <tbody>
          {reports
            .filter((r: Report) => r.status === 'REVIEW')
            .map((r: Report, i: number) => {
              const player = players.find((p) => p.id === r.playerId);
              const assignment: Assignment | undefined = assignments.find(
                (a: Assignment) => a.id === r.assignmentId,
              );
              if (player && assignment) {
                return (
                  <Table.Row key={i}>
                    <th style={verticalAlignStyle}>
                      {player.firstName} {player.lastName}
                    </th>
                    <td style={verticalAlignStyle}>{assignment.title}</td>
                    <td style={verticalAlignStyle}>{assignment.description}</td>
                    <td align="center">
                      <input
                        type="text"
                        className="input is-small has-text-centered"
                        style={{ width: '50px' }}
                        inputMode="tel"
                        defaultValue={assignment.pointsMaximum}
                        placeholder="1"
                      />
                    </td>
                    <td align="center" style={verticalAlignStyle}>
                      <IconContainer>
                        <button
                          className="mr-2 has-text-success"
                          style={buttonNoStyle}
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                      </IconContainer>
                      <IconContainer>
                        <button
                          className="has-text-danger"
                          style={buttonNoStyle}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </IconContainer>
                    </td>
                  </Table.Row>
                );
              } else {
                return null;
              }
            })}
        </tbody>
      </Table>
    </>
  );
};

export default ReportList;

import React, { useState } from 'react';
import { Title, Table, IconContainer, Field } from 'components/bulma/elements';
import { Control } from 'components/bulma/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Report, Assignment } from 'interfaces';
import classnames from 'classnames';

const ReportList: React.FC = () => {
  const verticalAlignStyle: React.CSSProperties = { verticalAlign: 'middle' };
  const buttonNoStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
  };

  const [disabledIndexes, setDisabledIndexes] = useState<number[]>([]);

  const approve = (el: HTMLButtonElement, i: number) => {
    const select = document.querySelector(
      `#pointsGiven${i}`,
    ) as HTMLSelectElement | null;
    if (select) {
      console.log(i, 'approved', select.value);
      setDisabledIndexes([i, ...disabledIndexes]);
      el.style.opacity = '1';
    }
  };

  const reject = (el: HTMLButtonElement, i: number) => {
    console.log(i, 'rejected');
    setDisabledIndexes([i, ...disabledIndexes]);
    el.style.opacity = '1';
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
                const points: number[] = [];
                for (let j = 0; j <= assignment.pointsMaximum; j++) {
                  points.push(j);
                }
                const isDisabled: boolean = disabledIndexes.includes(i);
                return (
                  <Table.Row
                    key={i}
                    className={classnames({
                      'has-text-grey-light': isDisabled,
                    })}
                  >
                    <td style={verticalAlignStyle}>
                      {player.firstName} {player.lastName}
                    </td>
                    <td style={verticalAlignStyle}>{assignment.title}</td>
                    <td style={verticalAlignStyle}>{assignment.description}</td>
                    <td align="center">
                      <div className="select">
                        <select
                          disabled={isDisabled}
                          defaultValue={assignment.pointsMaximum}
                          id={`pointsGiven${i}`}
                        >
                          {points.map((n: number) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td align="center" style={verticalAlignStyle}>
                      <Field isGrouped groupCentered>
                        <Control>
                          <IconContainer>
                            <button
                              className="button has-text-success"
                              style={buttonNoStyle}
                              onClick={(e) => approve(e.currentTarget, i)}
                              disabled={isDisabled}
                            >
                              <FontAwesomeIcon icon={faCheck} />
                            </button>
                          </IconContainer>
                        </Control>
                        <Control>
                          <IconContainer>
                            <button
                              className="button has-text-danger"
                              style={buttonNoStyle}
                              onClick={(e) => reject(e.currentTarget, i)}
                              disabled={isDisabled}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </button>
                          </IconContainer>
                        </Control>
                      </Field>
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

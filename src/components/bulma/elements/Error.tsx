import React, { FC } from 'react';
import classNames from 'classnames';

const stateMap = {
  error: 'is-danger',
  success: 'is-success',
} as const;

type State = keyof typeof stateMap;

interface Props {
  state: State;
}

const Error: FC<Props> = ({ children, state }) => (
  <p className={classNames('help', stateMap[state])}>{children}</p>
);

export default Error;

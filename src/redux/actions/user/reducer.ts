import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

export type CounterActions = ActionType<typeof actions>;

export interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer<CounterState, CounterActions>(
  initialState,
)
  .handleAction(actions.increase, (state, action) => ({
    ...state,
    count: state.count + action.payload,
  }))
  .handleAction(actions.decrease, (state, action) => ({
    ...state,
    count: state.count - action.payload,
  }));

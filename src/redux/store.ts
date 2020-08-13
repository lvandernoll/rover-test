import {
  CounterActions,
  counterReducer,
  CounterState,
} from 'redux/actions/user/reducer';
import {
  combineReducers,
  createStore,
  CombinedState,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export type RootActions = CounterActions;

export interface RootState {
  counter: CounterState;
}

const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  actionCreators: {},
});

export const store = createStore<
  CombinedState<RootState>,
  RootActions,
  unknown,
  null
>(rootReducer, composeEnhancers(applyMiddleware(thunk)));

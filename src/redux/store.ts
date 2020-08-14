import {
  UserState,
  UserActions,
  userReducer,
} from 'redux/actions/user/reducer';
import {
  combineReducers,
  createStore,
  CombinedState,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { loadState, saveState } from 'utils/localStorage';

export type RootActions = UserActions;

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers<RootState>({
  user: userReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  actionCreators: {},
});

const sagaMiddleware = createSagaMiddleware();

const initialState = loadState();

export const store = createStore<
  CombinedState<RootState>,
  RootActions,
  unknown,
  null
>(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(rootSaga);

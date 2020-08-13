import { createAction } from 'typesafe-actions';
import * as actionTypes from './action-types';

export const increase = createAction(actionTypes.INCREASE)<number>();
export const decrease = createAction(actionTypes.DECREASE)<number>();

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as workoutsReducers from './workouts.reducers';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  workouts: workoutsReducers.reducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import {
  MetaReducer,
  createReducer, 
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {Workout} from '../../shared/models/workout.model'
import * as WorkoutsActions from '../actions/workouts.actions';


export interface State {
  workouts: Workout[];
  isWorkoutsLoaded?:boolean;
  singleWorkout: Workout;
  isSingleWorkoutLoaded?:boolean;
}

export const initialState: State = {
  workouts: [],
  isWorkoutsLoaded: false,
  singleWorkout: null,
  isSingleWorkoutLoaded: false,
};

const workoutsReducer = createReducer(
  initialState,
  on(WorkoutsActions.loadWorkouts, state => ({ ...state, isWorkoutsLoaded: false })),
  on(WorkoutsActions.loadWorkoutsSuccess, (state, { payload } ) => ({ ...state, workouts:payload, isWorkoutsLoaded:true })),
  on(WorkoutsActions.loadSingleWorkout, state => ({ ...state, singleWorkout: null, isSingleWorkoutLoaded: false })),
  on(WorkoutsActions.loadSingleWorkoutSuccess, (state, { payload } ) => ({ ...state, singleWorkout: payload, isSingleWorkoutLoaded: true }))
  );

export function reducer(state: State | undefined, action: Action) {
  return workoutsReducer(state, action);
}


import { createAction, props, State } from '@ngrx/store';
import { Workout } from '../../shared/models/workout.model';

export const LoadWorkouts:string ='[Load Workouts] Load Workouts';
export const LoadWorkoutsSuccess:string ='[Load Workouts] Load Workouts Success';

export const loadWorkouts = createAction(
    LoadWorkouts
);

export const loadWorkoutsSuccess = createAction(
    LoadWorkoutsSuccess,
    props< { payload: Workout[] }>()
);
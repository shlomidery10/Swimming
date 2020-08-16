import { createAction, props, State } from '@ngrx/store';
import { Workout } from '../../shared/models/workout.model';

export const LoadWorkouts:string ='[Load Workouts] Load Workouts';
export const LoadWorkoutsSuccess:string ='[Load Workouts] Load Workouts Success';

export const LoadSingleWorkout:string ='[Load Single Workout] Load  Single Workout';
export const LoadSingleWorkoutSuccess:string ='[Load  Single Workout] Load  Single Workout Success';

export const loadWorkouts = createAction(
    LoadWorkouts
);

export const loadWorkoutsSuccess = createAction(
    LoadWorkoutsSuccess,
    props< { payload: Workout[] }>()
);

export const loadSingleWorkout = createAction(
    LoadSingleWorkout,
    props< { workout: Workout }>()
);

export const loadSingleWorkoutSuccess = createAction(
    LoadSingleWorkoutSuccess,
    props< { payload: Workout }>()
);
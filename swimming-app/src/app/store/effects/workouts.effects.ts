import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { HttpService } from '../http-service.service';
import * as workoutsActions from '../actions/workouts.actions';
import { Workout } from 'src/app/shared/models/workout.model';
import { Action } from '@ngrx/store';

@Injectable()
export class WorkoutsEffects {
 
    loadWorkouts$ = createEffect(() => this.actions$.pipe(
    ofType(workoutsActions.LoadWorkouts),
    mergeMap(() => this.httpService.getAll()
      .pipe(
        map((wokouts:Workout[]) => workoutsActions.loadWorkoutsSuccess({ payload: wokouts})),
        catchError(() => EMPTY)
      ))
    )
  );

  loadWorkout$ =  createEffect(() =>
  this.actions$.pipe(
    ofType(workoutsActions.loadSingleWorkout),
    exhaustMap(action =>
      this.httpService.getWorkout(action.workout).pipe(
        map(workout => workoutsActions.loadSingleWorkoutSuccess({ payload: workout })),
        catchError(() => EMPTY)
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {}
}
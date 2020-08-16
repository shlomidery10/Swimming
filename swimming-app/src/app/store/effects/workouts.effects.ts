import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpService } from '../http-service.service';
import { LoadWorkouts,LoadWorkoutsSuccess } from '../actions/workouts.actions';

@Injectable()
export class WorkoutsEffects {
 
    loadWorkouts$ = createEffect(() => this.actions$.pipe(
    ofType(LoadWorkouts),
    mergeMap(() => this.httpService.getAll()
      .pipe(
        map(wokouts => ({ type: LoadWorkoutsSuccess, payload: wokouts })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {}
}
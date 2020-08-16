import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Workout } from '../shared/models/workout.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor (private http: HttpClient) {}

  getAll() {
    return this.http.get("assets/mocks/workouts.json");
  }

  getWorkout(workout:Workout) {
    return of(workout);
  }
}

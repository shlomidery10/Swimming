import { Component, OnInit } from '@angular/core';
import { Exercise } from '../shared/models/exercise.model';
import { Workout } from '../shared/models/workout.model';
import { WorkoutPart } from '../shared/models/workoutPart.model';

@Component({
  selector: 'app-planing-workout',
  templateUrl: './planing-workout.component.html',
  styleUrls: ['./planing-workout.component.css']
})
export class PlaningWorkoutComponent implements OnInit {

  workout:Workout = new Workout(null,null,null,null,[ new WorkoutPart("Warmup","test-goal-Warmup",[]),new WorkoutPart("main","test-goal-main",[]),new WorkoutPart("release","test-goal-release",[])]);
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Workout } from '../shared/models/workout.model';
import { WorkoutPart } from '../shared/models/workoutPart.model';

@Component({
  selector: 'app-register-workout',
  templateUrl: './register-workout.component.html',
  styleUrls: ['./register-workout.component.css']
})
export class RegisterWorkoutComponent implements OnInit {
  // loginForm: FormGroup;

  @Input() workout:Workout = new Workout(null,null,null,null,[ new WorkoutPart("Warmup","test",[])]);
  @Output() workoutChange = new EventEmitter();
  
  value = 'Clear me';


  constructor() { 



  }

  ngOnInit(): void {
  }

}

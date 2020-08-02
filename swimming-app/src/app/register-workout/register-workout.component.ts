import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-workout',
  templateUrl: './register-workout.component.html',
  styleUrls: ['./register-workout.component.css']
})
export class RegisterWorkoutComponent implements OnInit {
  // loginForm: FormGroup;
  value = 'Clear me';
  trainerName:string;
  week:number;
  goal_of_training:string;
  date:string;

  constructor() { 



  }

  ngOnInit(): void {
  }

}

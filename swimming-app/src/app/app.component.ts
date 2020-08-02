import { Component } from '@angular/core';
import { Exercise } from './shared/models/exercise.model';
import { ExerciseSet } from './shared/models/exerciseSet.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swimming-app';
  
  exercise: Exercise = {
    description:"",
    distance:null,
    repetition:null,
    exerciseSets:new Array<ExerciseSet>()
  };
}

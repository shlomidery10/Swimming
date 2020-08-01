import { Component } from '@angular/core';
import { Exercise } from './model/exercise.model';
import { SplitDistance } from './model/split-distance.model';
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
    splitDistances:new Array<SplitDistance>()
  };
}

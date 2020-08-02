import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Exercise } from '../shared/models/exercise.model';
import { ExerciseSet } from '../shared/models/exerciseSet.model';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() value: Exercise;
  @Output() valueChange = new EventEmitter();
  //  repetition distance description
  // splitDistances: SplitDistance[] = new Array<SplitDistance>();
  constructor() {
    this.value = new Exercise(null,null,null,new Array<ExerciseSet>());
   }

  ngOnInit(): void {
    this.value.exerciseSets.push(new Exercise(null,null,null,new Array<ExerciseSet>()));
  }

  addNewSplitDistance(splitDistance:ExerciseSet){
    this.value.exerciseSets.push(splitDistance);
  }
  
  inputOnChange(){

  }
}
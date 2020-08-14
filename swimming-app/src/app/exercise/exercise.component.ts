import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
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
  @Output() onValueChange = new EventEmitter();
  
  validationResult:ExerciseValidation = ExerciseValidation.NoError;
  //  repetition distance description
  // splitDistances: SplitDistance[] = new Array<SplitDistance>();
  constructor() {
    // this.value = new Exercise(null,null,null,new Array<ExerciseSet>());
   }

  ngOnInit(): void {
    if(!this.value.exerciseSets || this.value.exerciseSets.length==0){
      this.value.exerciseSets.push(new ExerciseSet(null,null));
    }
  }

  addNewSplitDistance(exerciseSet:ExerciseSet){
    this.value.exerciseSets.push(exerciseSet);
  }

  validateExercise(event){
    let count:number=0;
    this.value.exerciseSets.forEach(exerciseSet=> count+=exerciseSet.distance);
    if( count!= 0 && this.value.distance != count && this.value.distance%count != 0){
      this.validationResult= ExerciseValidation.DistanceDontMatch;
    }else{
      this.validationResult= ExerciseValidation.NoError;
    }
    this.onValueChange.emit(event);
  }
}

enum ExerciseValidation {
  NoError = "NoError",
  DistanceDontMatch = "DistanceDontMatch",

}


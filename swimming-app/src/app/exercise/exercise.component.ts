import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Exercise } from '../model/exercise.model';
import { SplitDistance } from '../model/split-distance.model';

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
    this.value = new Exercise();
    this.value.splitDistances = new Array<SplitDistance>();
   }

  ngOnInit(): void {
    this.value.splitDistances.push(new SplitDistance());
  }

  addNewSplitDistance(splitDistance:SplitDistance){
    this.value.splitDistances.push(splitDistance);
  }
  
  inputOnChange(){

  }
}
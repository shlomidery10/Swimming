import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WorkoutPart } from 'src/app/shared/models/workoutPart.model';
import { Exercise } from 'src/app/shared/models/exercise.model';

@Component({
  selector: 'app-training-cell',
  templateUrl: './training-cell.component.html',
  styleUrls: ['./training-cell.component.css']
})
export class TrainingCellComponent implements OnInit {
  private params: any;
  public exercise:Exercise;

  ngOnInit(): void {
  }




  constructor(private formBuilder: FormBuilder) {
    this.exercise=new Exercise(null,null,null,[]);
  }

  agInit(params: any): void {
    console.log(params);
    console.log(params.getValue());
    
      this.params = params;
      this.exercise = this.params.value;
  }
  // demonstrates how you can do "inline" editing of a cell
  onChange(exercise: Exercise) {
      this.exercise = exercise;
      this.params.node.setDataValue(this.params.colDef, this.exercise);

      if (this.params.eGridCell) {
          this.params.eGridCell.focus();
      }
  }

  refresh(params: any): boolean {
      return false;
  }

 

}

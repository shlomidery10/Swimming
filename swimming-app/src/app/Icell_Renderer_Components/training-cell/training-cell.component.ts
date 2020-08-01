import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TrainingSet } from 'src/app/shared/models/trainingSet';
import { WorkoutSet } from 'src/app/shared/models/workoutset';

@Component({
  selector: 'app-training-cell',
  templateUrl: './training-cell.component.html',
  styleUrls: ['./training-cell.component.css']
})
export class TrainingCellComponent implements OnInit {


  ngOnInit(): void {
  }




  id:number=0;
  constructor(private formBuilder: FormBuilder) {
    this.trainingSets=new Array<TrainingSet>();


   }
  private params: any;
  private checked: boolean = false;
  public trainingSets:Array<TrainingSet>;
  agInit(params: any): void {
      this.params = params;
      this.checked = this.params.value === "On";
  }
  // demonstrates how you can do "inline" editing of a cell
  onChange(checked: boolean) {
      this.checked = checked;
      this.params.node.setDataValue(this.params.colDef, this.checked ? "On" : "Off");

      if (this.params.eGridCell) {
          this.params.eGridCell.focus();
      }
  }
  refresh(params: any): boolean {
      return false;
  }

  addNewTraingSet()
  {
    let training:TrainingSet=new TrainingSet();
    training.workoutSet=new WorkoutSet();
    training.workoutSet.TrainingName="a";
    training.workoutSet.distance=0;
    training.id=this.id;
    this.id=this.id+1;
    this.trainingSets.push(training);
    console.log(this.trainingSets);
    
  }

}

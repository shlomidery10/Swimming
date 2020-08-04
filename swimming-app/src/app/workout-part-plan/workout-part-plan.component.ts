import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkoutPart } from '../shared/models/workoutPart.model';
import { Exercise } from '../shared/models/exercise.model';

@Component({
  selector: 'workout-part-plan',
  templateUrl: './workout-part-plan.component.html',
  styleUrls: ['./workout-part-plan.component.css']
})
export class WorkoutPartPlanComponent implements OnInit {

  @Input() workoutPart:WorkoutPart = new WorkoutPart(null,null,[ new Exercise(null,null,null,[])]);
  @Output() workoutPartChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-set-major-exercise',
  templateUrl: './training-set-major-exercise.component.html',
  styleUrls: ['./training-set-major-exercise.component.css']
})
export class TrainingSetMajorExerciseComponent implements OnInit {
  reference: any;
  index: number;
  constructor() { }

  ngOnInit(): void {
  }
  removeSkills() {
    this.reference.destroy();
  }

}

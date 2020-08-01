import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-set-warm-up',
  templateUrl: './training-set-warm-up.component.html',
  styleUrls: ['./training-set-warm-up.component.css']
})
export class TrainingSetWarmUpComponent implements OnInit {

  reference: any;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }
  removeSkills() {
    this.reference.destroy();
  }
}

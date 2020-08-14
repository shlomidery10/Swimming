import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-set-release',
  templateUrl: './training-set-release.component.html',
  styleUrls: ['./training-set-release.component.css']
})
export class TrainingSetReleaseComponent implements OnInit {

  reference: any;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }
  removeSkills() {
    this.reference.destroy();
  }

}

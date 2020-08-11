import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coach } from 'src/app/shared/models/coach.model';

@Component({
  selector: 'coach-details',
  templateUrl: './coach-details.component.html',
  styleUrls: ['./coach-details.component.css']
})
export class CoachDetailsComponent implements OnInit {
  @Input() coachDetails: Coach= {
    firstName:"",
    lastName:"",
    email:"",
    teams:[
      {
        name:"",
        trainees:[]
      }
    ]
  };
  @Output() coachDetailsChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';

@Component({
  selector: 'team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  @Input() teamDetails: Team={
    name:"",
    trainees:[]
  };
  @Output() teamDetailsChange = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}

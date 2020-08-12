import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() userDetails: User= new User();
  @Output() userDetailsChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

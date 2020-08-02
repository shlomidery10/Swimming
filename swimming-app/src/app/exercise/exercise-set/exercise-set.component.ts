import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExerciseSet } from '../../shared/models/exerciseSet.model';

@Component({
  selector: 'exercise-set',
  templateUrl: './exercise-set.component.html',
  styleUrls: ['./exercise-set.component.css']
})
export class ExerciseSetComponent implements OnInit {

  @Input() exerciseSet: ExerciseSet;
  isBlank: boolean;
  @Input('blank') set setAttribute(blank: boolean | '') {
    this.isBlank = blank === '' || blank;
  }
  @Output() exerciseSetChange = new EventEmitter();
  @ViewChild('hiddenText') textEl: ElementRef;
  width:number;
  minWidth: number =30;

  constructor() { }
  ngOnInit(): void {
    if (this.isBlank){
      this.exerciseSet= new ExerciseSet(null,null);
    }
    
  }

  resize() {
    setTimeout(() => this.width = Math.max(this.minWidth, this.textEl.nativeElement.offsetWidth));
  }

  inputOnChange(){
    if (this.isBlank){
      this.exerciseSetChange.emit(new ExerciseSet(null,null));
    }else{
      this.exerciseSetChange.emit(this.exerciseSet);
    }

  }
}
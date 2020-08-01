import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SplitDistance } from 'src/app/model/split-distance.model';

@Component({
  selector: 'split-distance',
  templateUrl: './split-distance.component.html',
  styleUrls: ['./split-distance.component.css']
})
export class SplitDistanceComponent implements OnInit {

  @Input() splitDistance: SplitDistance;
  isBlank: boolean;
  @Input('blank') set setAttribute(blank: boolean | '') {
    this.isBlank = blank === '' || blank;
  }
  @Output() splitDistanceChange = new EventEmitter();
  @ViewChild('hiddenText') textEl: ElementRef;
  width:number;
  minWidth: number =30;

  constructor() { }
  ngOnInit(): void {
    if (this.isBlank){
      this.splitDistance= new SplitDistance();
    }
    
  }

  resize() {
    setTimeout(() => this.width = Math.max(this.minWidth, this.textEl.nativeElement.offsetWidth));
  }

  inputOnChange(){
    if (this.isBlank){
      this.splitDistanceChange.emit(new SplitDistance());
    }else{
      this.splitDistanceChange.emit(this.splitDistance);
    }

  }
}
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mat-form-autowidth-field',
  templateUrl: './mat-form-autowidth-field.component.html',
  styleUrls: ['./mat-form-autowidth-field.component.css']
})
export class MatFormAutowidthFieldComponent implements OnInit {
  @Input() isBlank: boolean;
  @Input('minWidth') set setAttribute(blank: number | '') {
    this.minWidth = blank? blank : 30 ;
  }
  @Input() value: any;
  @Input() type: string;
  @Output() valueChange = new EventEmitter();
  @ViewChild('hiddenText') textEl: ElementRef;

  minWidth: number;
  width:number;

  constructor() { }

  ngOnInit(): void {
    this.resize();
  }

  resize() {
    setTimeout(() => this.width = Math.max(this.minWidth, this.textEl.nativeElement.offsetWidth+5));
  }

  inputOnChange(){
    this.valueChange.emit(this.value);
  }
}

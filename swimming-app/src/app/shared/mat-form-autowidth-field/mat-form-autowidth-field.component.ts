import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

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
  @Input() label: string;
  
  @Output() valueChange = new EventEmitter();
  @Output() onValueChange = new EventEmitter();
  
  @ViewChild('hiddenText') textEl: ElementRef;

  minWidth: number;
  width:number;
  isRTL:boolean= false;
  constructor(public translate: TranslateService) { 
    this.translate.get('direction').subscribe((res: any) => {
      this.isRTL = res == "rtl";
    });
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.isRTL = event.translations['direction'] == "rtl";
    });
  }

  ngOnInit(): void {
    this.resize();
  }

  resize() {
    setTimeout(() => this.width = Math.max(this.minWidth, this.textEl.nativeElement.offsetWidth+5));
  }

  inputOnChange(event){

    if(this.type === "number"){
      this.valueChange.emit(parseInt( this.value));
    }else{
      this.valueChange.emit(this.value);
    }
    this.onValueChange.emit(event);
  }

}

import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[Autowidth]'
})
export class AutowidthDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('keyup') onKeyUp() {
    this.resize();
  }

  @HostListener('focus') onFocus() {
    this.resize();
  }

  private resize() {
    switch (this.el.nativeElement.type) {
      case "text":
        this.el.nativeElement.setAttribute('style','min-width: 80px; width:'+ ((this.el.nativeElement.value.length+1)*8 ) + 'px');
        
        break;
      case "number":
          this.el.nativeElement.setAttribute('style','min-width: 30px; width:'+ ((this.el.nativeElement.value.length+1)*8 ) + 'px');
          break;
    
      default:
        break;
    }
  }
}

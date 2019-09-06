import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }
  @Input() set appBtn(btnType) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    if(btnType === 'save') {
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'btn-custom');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'class', 'btn-custom-red');
    }
  }
}

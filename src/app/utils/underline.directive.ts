import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }
  // Event listeners for element hosting
  // the directive
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }
  // Event method to be called on mouse enter and on mouse leave
  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }

}

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
//structural directives

@Directive({
  selector: '[appUnless]'
})
export class AppUnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      // this.hasView = true;
    } else if (condition) {
      this.viewContainer.clear();
      // this.hasView = false;
    }
  }
}

import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdminRights]'
})
export class AdminRightsDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  // ngOnInit(): void {
  //   const admin = localStorage.getItem('roles');
  //   console.log(admin);
  //   if (admin === 'ADMIN') {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }
  //
  @Input() set appAdminRights(condition: boolean) {
    const admin = localStorage.getItem('roles');
    console.log(admin);
    if (admin === 'ADMIN') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

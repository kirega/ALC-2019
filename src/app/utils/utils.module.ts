import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppUnlessDirective} from './app-unless.directive';
import { UnderlineDirective } from './underline.directive';
import { AdminRightsDirective } from './admin-rights.directive';
import { BtnDirective } from './btn.directive';



@NgModule({
  declarations: [
    AppUnlessDirective,
    UnderlineDirective,
    AdminRightsDirective,
    BtnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppUnlessDirective,
    UnderlineDirective,
    AdminRightsDirective,
    BtnDirective
  ]
})
export class UtilsModule { }

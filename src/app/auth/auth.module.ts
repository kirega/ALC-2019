import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {LayoutModule} from '../layout/layout.module';
import {FormsModule} from '@angular/forms';
import {MustMatchDirective} from '../utils/mustMatch.directive';



@NgModule({
  declarations: [
    SignupComponent,
    MustMatchDirective,
    LoginComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,

  ],
  exports: [
    SignupComponent,
    LoginComponent
  ]
})
export class AuthModule { }

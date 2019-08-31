import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from '../layout/layout.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class DashboardModule { }

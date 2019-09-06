import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from '../layout/layout.module';
import {UtilsModule} from '../utils/utils.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UtilsModule,
    LayoutModule
  ]
})
export class DashboardModule { }

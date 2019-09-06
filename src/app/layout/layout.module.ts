import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {UtilsModule} from '../utils/utils.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class LayoutModule { }

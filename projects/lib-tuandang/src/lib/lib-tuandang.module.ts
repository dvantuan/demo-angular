import { NgModule } from '@angular/core';
import { LibTuandangComponent } from './lib-tuandang.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LibTuandangComponent, LoginComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [LibTuandangComponent, LoginComponent, HeaderComponent, SidebarComponent, FooterComponent]
})
export class LibTuandangModule { }

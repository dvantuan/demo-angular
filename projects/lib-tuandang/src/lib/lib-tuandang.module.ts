import { NgModule } from '@angular/core';
import { LibTuandangComponent } from './lib-tuandang.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LibTuandangComponent, LoginComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
  ],
  exports: [LibTuandangComponent]
})
export class LibTuandangModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerMenus = [{text: 'Home', link: '/home'}, {text: 'View', link: '/view'}, {text: 'Setting', link: '/setting'}, {text: 'Help', link: '/help'}];
  sidebarMenus = [{text: 'Project', link: '/project'}, {text: 'Setting', link: '/setting'}, {text: 'Help', link: '/help'}];
  profiles = [{text: 'Profile', link: '/profile'}, {text: 'Setting', link: '/setting'}, {text: 'Logout', link: '/logout'}];
  dirname = 'assets/';
  logoImage = this.dirname + 'TMA-logo1.png';
  avatarImage = this.dirname + 'psyduck.png';
  
  constructor() { }

  ngOnInit() {
  }

}

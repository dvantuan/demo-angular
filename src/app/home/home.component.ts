import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menus = [{text: 'Home', link: '/home'}, {text: 'Setting', link: '/setting'}];
  profiles = [{text: 'Profile', link: '/profile'}, {text: 'Setting', link: '/setting'}, {text: 'Logout', link: '/logout'}];
  dirname = 'assets/';
  logoImage = this.dirname + 'TMA-logo1.png';
  avatarImage = this.dirname + 'psyduck.png';
  
  constructor() { }

  ngOnInit() {
  }

}

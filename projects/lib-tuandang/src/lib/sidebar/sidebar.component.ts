import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './../bootstrap.min.css']
})
export class SidebarComponent implements OnInit {
  @Input() public menus: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}

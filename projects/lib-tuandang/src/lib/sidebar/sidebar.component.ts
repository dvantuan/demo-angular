import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() public sidebarMenus: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}

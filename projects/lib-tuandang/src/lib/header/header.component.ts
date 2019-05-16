import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public headerMenus: Array<Object>;
  @Input() public profiles: Array<Object>;
  @Input() public logoImage: String;
  @Input() public avatarImage: String;
  constructor() { }

  ngOnInit() {
  }

}

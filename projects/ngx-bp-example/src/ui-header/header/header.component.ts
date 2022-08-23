import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-bp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() links: Links[] = [];   //dec de datos entrantes

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Links {
  name: string,
  router: string []| undefined

}

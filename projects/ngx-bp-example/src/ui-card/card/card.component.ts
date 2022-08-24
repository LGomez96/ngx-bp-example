import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imageUrl = 'https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg';
  @Input() title = 'Title';
  @Input() description = 'Description';

  constructor() { }

  ngOnInit(): void {
  }

}

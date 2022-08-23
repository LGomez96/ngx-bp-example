import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() minLength: number = 5;
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Label';
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkValid(){
    if(this.value.length >= this.minLength){
      return true;
    }
    return false;
  }
}

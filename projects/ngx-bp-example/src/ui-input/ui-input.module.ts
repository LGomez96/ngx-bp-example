import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  exports: [
    InputComponent
  ]
})
export class UiInputModule { }

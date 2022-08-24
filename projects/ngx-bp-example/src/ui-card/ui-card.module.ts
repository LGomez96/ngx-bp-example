import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  exports: [
    CardComponent
  ]
})
export class UiCardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    FormsModule,
    DragDropModule
  ],
  exports: [
    DragAndDropComponent
  ]
})
export class UiDragAndDropModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiCardModule, UiDragAndDropModule, UiHeaderModule, UiInputModule } from 'projects/ngx-bp-example/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiHeaderModule,
    UiInputModule,
    UiCardModule,
    UiDragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

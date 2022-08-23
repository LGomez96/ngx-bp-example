import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiHeaderModule, UiInputModule } from 'projects/ngx-bp-example/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiHeaderModule,
    UiInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

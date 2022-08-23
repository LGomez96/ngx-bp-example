import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiHeaderModule } from 'projects/ngx-bp-example/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiCardModule, UiHeaderModule, UiInputModule } from 'projects/ngx-bp-example/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiHeaderModule,
    UiInputModule,
    UiCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

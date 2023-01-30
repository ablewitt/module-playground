import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RootBeeModule} from "./root-bee/root-bee.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootBeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

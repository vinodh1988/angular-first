import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// all your components need to be specified in declarations
// all your pipes need to be specified in declarations
// all your directives need to be specified in declerations

//suppose if you are using external modules, you need to specify in imports
// in providers we might specify services

//every module will have one or more root components

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

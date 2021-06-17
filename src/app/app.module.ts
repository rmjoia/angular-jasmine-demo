import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CongratsComponent } from './congrats/congrats.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    CounterButtonComponent,
    CongratsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

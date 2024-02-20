import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesMdule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesMdule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

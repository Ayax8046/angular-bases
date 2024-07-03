import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** MODULOS */
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';

/** VISTAS */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

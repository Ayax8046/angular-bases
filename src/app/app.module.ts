import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** MODULOS */
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

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
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

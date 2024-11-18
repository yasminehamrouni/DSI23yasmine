import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
   ComponentConnexion,
   Componentacceuil,
   Componentinscription,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ajout du module de routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms' // *2 hay que agregarlo para que funcione el 'ngModel'

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // *2 hay que agregarlo para que funcione el 'ngModel'
  ],
  providers: [],
  bootstrap: [
    AppComponent,   // este es el default
    // PruebaComponent, // *1 para que empiece con este modulo
  ]
})
export class AppModule { }

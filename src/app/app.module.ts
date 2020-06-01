import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // *2 hay que agregarlo para que funcione el 'ngModel'
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HomeComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    CatalogoComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // *2 hay que agregarlo para que funcione el 'ngModel'
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent, // este es el default
    // PruebaComponent, // *1 para que empiece con este modulo
  ],
})
export class AppModule {}

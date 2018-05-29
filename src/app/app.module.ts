import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavLateralComponent } from './componentes/nav-lateral/nav-lateral.component';
import { NavSuperiorComponent } from './componentes/nav-superior/nav-superior.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AppRoutingModule } from './/app-routing.module';
import { TecladoComponent } from './componentes/teclado/teclado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLateralComponent,
    NavSuperiorComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

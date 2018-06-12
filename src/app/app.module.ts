import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular-6-datatable";

import { AppComponent } from './app.component';
import { NavLateralComponent } from './componentes/nav-lateral/nav-lateral.component';
import { NavSuperiorComponent } from './componentes/nav-superior/nav-superior.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AppRoutingModule } from './/app-routing.module';
import { TecladoComponent } from './componentes/teclado/teclado.component';
import { FacturacionComponent } from './componentes/facturacion/facturacion.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';
import { DataFiltePipe } from './pipes/data-filte.pipe';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { DataFilterEmpleadosPipe } from './pipes/data-filter-empleados.pipe';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLateralComponent,
    NavSuperiorComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    TecladoComponent,
    FacturacionComponent,
    ClienteComponent,
    DetalleFacturaComponent,
    DataFiltePipe,
    EmpleadosComponent,
    DataFilterEmpleadosPipe,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

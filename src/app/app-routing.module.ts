import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { NavSuperiorComponent } from './componentes/nav-superior/nav-superior.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { FacturacionComponent } from './componentes/facturacion/facturacion.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'prueba', component: NavSuperiorComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'detalles-facturas', component: DetalleFacturaComponent },
  { path: 'detalles-empleados', component: EmpleadosComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
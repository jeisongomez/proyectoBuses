import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../modelos/user';

@Component({
  selector: 'app-nav-lateral',
  templateUrl: './nav-lateral.component.html',
  styleUrls: ['./nav-lateral.component.css'],
  providers: [LoginService]
})
export class NavLateralComponent implements OnInit {

  public logueado;
  public rol;
  public rol2;
  public rolesUsuario;

  public facturacion;
  public empleados;
  public rutas;
  public clientes;
  public buses;

  public CrearFactura;
  public ConsultarFactura;

  public ConsultarEmpleado;
  public CrearEmpleado;
  public EditarEmpleado;
  public BorrarEmpleado;

  public ConsultarRutas;
  public CrearRutas;
  public EditarRutas;

  public ConsultarCliente;
  public CrearCliente;
  public EditarCliente;

  public ConsultarBuses;
  public CrearBuses;
  public EditarBuses;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) { }

  ngOnInit() {
    this.obtenerUsusario();
    this.obtenerRoles();
  }

  mostrar() {
    if (this.ConsultarEmpleado == '0' && this.CrearEmpleado == '0' && this.EditarEmpleado == '0' && this.BorrarEmpleado == '0') {
      this.empleados = '1';
    };

    if (this.ConsultarRutas == '0' && this.CrearRutas == '0' && this.EditarRutas == '0') {
      this.rutas = '1';
    };

    if (this.ConsultarCliente == '0' && this.CrearCliente == '0' && this.EditarCliente == '0') {
      this.clientes = '1';
    };

    if (this.ConsultarBuses == '0' && this.CrearBuses == '0' && this.EditarBuses == '0') {
      this.buses = '1';
    };

    if (this.ConsultarEmpleado == '' && this.CrearEmpleado == '' && this.EditarEmpleado == '' && this.BorrarEmpleado == '') {
      this.empleados = '1';
    };

    if (this.ConsultarRutas == '' && this.CrearRutas == '' && this.EditarRutas == '') {
      this.rutas = '1';
    };

    if (this.ConsultarCliente == '' && this.CrearCliente == '' && this.EditarCliente == '') {
      this.clientes = '1';
    };

    if (this.ConsultarBuses == '' && this.CrearBuses == '0' && this.EditarBuses == '') {
      this.buses = '1';
    };
  };

  obtenerUsusario() {
    this.logueado = JSON.parse(localStorage.getItem('logueadoo'));
    console.log(this.logueado);
  }

  obtenerRoles() {
    this._loginService.datosRoles(this.logueado).subscribe(
      response => {
        this.rol = response;
        //console.log(this.rol);
        this.rol2 = JSON.parse(this.rol._body);
        //console.log(this.rol2);
        if (this.rol2.code == 400) {
          console.log('hay un error en el sistema');
        } else {
          this.rolesUsuario = this.rol2.data;
          console.log(this.rolesUsuario);

          this.CrearFactura = this.rolesUsuario.CrearFactura;
          this.ConsultarFactura = this.rolesUsuario.ConsultarFactura;
          this.ConsultarEmpleado = this.rolesUsuario.ConsultarEmpleado;
          this.CrearEmpleado = this.rolesUsuario.CrearEmpleado;
          this.EditarEmpleado = this.rolesUsuario.EditarEmpleado;
          this.BorrarEmpleado = this.rolesUsuario.BorrarEmpleado;
          this.ConsultarRutas = this.rolesUsuario.ConsultarRutas;
          this.CrearRutas = this.rolesUsuario.CrearRutas;
          this.EditarRutas = this.rolesUsuario.EditarRutas;
          this.ConsultarCliente = this.rolesUsuario.ConsultarCliente;
          this.CrearCliente = this.rolesUsuario.CrearCliente;
          this.EditarCliente = this.rolesUsuario.EditarCliente;
          this.ConsultarBuses = this.rolesUsuario.ConsultarBuses;
          this.CrearBuses = this.rolesUsuario.CrearBuses;
          this.EditarBuses = this.rolesUsuario.EditarBuses;

          this.facturacion = '0';
          this.empleados = '0';
          this.rutas = '0';
          this.clientes = '0';
          this.buses = '0';

          this.mostrar();
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { RutasService } from '../../servicios/rutas.service';
import { User } from '../../modelos/user';
import { UsuarioUbicacion } from '../../modelos/usuarioUbicacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService, RutasService]
})
export class HomeComponent implements OnInit {

  public validar;
  public logueado;
  public usuario;
  public usuario2;
  public ubicacion;
  public rutas;
  public rutas2;
  public rutas3;
  public usuarioUbicacion;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService,
    private _rutasService: RutasService
  ) {
    this.validar = localStorage.getItem('contador');
    this.usuarioUbicacion = new UsuarioUbicacion('');
  }

  ngOnInit() {
    this.refrescar();
    console.log(this.validar);
    //console.log(JSON.parse(localStorage.getItem('usuario')));
    this.obtenerUsusario();
    this.datosUsuario();
  }

  refrescar() {
    if (this.validar == '0') {
      localStorage.setItem('contador', '1');
      location.reload();
    }
  }

  obtenerUsusario() {
    this.logueado = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.logueado);
  }

  datosUsuario() {
    this._loginService.datosEmpleado(this.logueado).subscribe(
      response => {
        this.usuario = response;
        this.usuario2 = JSON.parse(this.usuario._body);
        //console.log(this.usuario2);
        if (this.usuario2.code == 400) {
          console.log('hay un error en el sistema')
        } else {
          this.usuarioUbicacion = this.usuario2.data;
          console.log(this.usuarioUbicacion);
          this.lasRutas(this.usuarioUbicacion);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  lasRutas(user){
    console.log(user);
    this._rutasService.obtenerRutas(user).subscribe(
      response => {
        this.rutas = response;
        //alert(this.rutas._body);
        this.rutas2 = JSON.parse(this.rutas._body);
        //console.log(this.rutas2);
        //console.log(this.rutas2.data);
        this.rutas3 = this.rutas2.data;
        console.log(this.rutas3);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}


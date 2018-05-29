import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../modelos/user';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-nav-superior',
  templateUrl: './nav-superior.component.html',
  styleUrls: ['./nav-superior.component.css'],
  providers: [LoginService]
})
export class NavSuperiorComponent implements OnInit {

  public logueado;
  public nombreUsuario;
  public apellidoUsuario;
  public cargo;
  public ubicacion;
  public usuario;
  public usuario2;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.obtenerUsusario();
    this.datosUsuario();
  }

  obtenerUsusario() {
    this.logueado = JSON.parse(localStorage.getItem('usuario'));
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
          this.nombreUsuario = this.usuario2.data.Nombre;
          this.apellidoUsuario = this.usuario2.data.Apellido;
          this.cargo = this.usuario2.data.Cargo;
          this.ubicacion = this.usuario2.data.ubicacion
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  logout() {
    localStorage.removeItem('usuario');
    this._router.navigate(['/']);
  }

}

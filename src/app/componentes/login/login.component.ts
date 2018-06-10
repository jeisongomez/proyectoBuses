import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../modelos/user';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public usuario: User;
  public identity;
  public identity2;
  public respuesta;
  public teclado;

  public corcheteA;
  public corcheteC;
  public llaveA;
  public llaveC;

  emitirEventoa() {
    console.log(this.teclado);
    this.usuario.nombreUsuario = this.teclado;
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) {
    this.usuario = new User(null, '', '');
    this.corcheteA = '[';
    this.corcheteC = ']';
    this.llaveA = '{';
    this.llaveC = '}';
    this.teclado = '';
  }

  ngOnInit() {
    console.log('componente login ejecutado');
  }

  verDatos(event){
    console.log(event);
  }

  onSubmit() {
    this._loginService.signup(this.usuario).subscribe(
      response => {
        this.identity = response;
        this.identity2 = JSON.parse(this.identity._body);
        //console.log(this.identity2);
        if (this.identity2.code == 400) {
          this.respuesta = this.identity2.message;
          this.usuario.id = null;
          this.usuario.nombreUsuario = '';
          this.usuario.contrasena = '';
        } else {
          this.respuesta = '';
          this.usuario.id = this.identity2.data.idLogin;
          //console.log(this.usuario);
          localStorage.setItem('contador', '0');
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          this._router.navigate(['home']);
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

}

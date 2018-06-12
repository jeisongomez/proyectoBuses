import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBALEMPLEADOS } from './globalEmpleados';

@Injectable()
export class EmpleadosService {

  public url;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBALEMPLEADOS.url;
  }

  obtenerEmpleados() { 
    return this._http.get(this.url + 'empleados');
  }

  addlogin(login){
    let json = JSON.stringify(login);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'add-login', params, { headers: headers });
  }

  obtenerIdLogin(){
    return this._http.get(this.url + 'get-id-login');
  }

  addEmpleado(empleado){
    let json = JSON.stringify(empleado);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'add-empleado', params, { headers: headers });
  }

}

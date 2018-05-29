import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBALLOGIN } from './globalLogin';


@Injectable()
export class LoginService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBALLOGIN.url;
  }

  signup(user_to_login) {
    let json = JSON.stringify(user_to_login);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'login', params, { headers: headers });
  }

  datosEmpleado(user){
    //console.log(user);
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'empleados', params, { headers: headers });
  }

  datosRoles(user){
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'roles', params, { headers: headers });
  }

}

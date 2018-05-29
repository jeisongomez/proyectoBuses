import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBALRUTAS } from './globalrutas';

@Injectable()
export class RutasService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = 'http://localhost/backend-buses/apis/rutas.php/';
  }

  obtenerRutas(user) {
    console.log(user);
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'getrutas', params, { headers: headers });
  }

}

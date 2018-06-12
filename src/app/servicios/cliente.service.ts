import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBALCLIENTE } from './globalCliente';

@Injectable()
export class ClienteService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBALCLIENTE.url;
  }

  verificarCliente(cliente){
    let json = JSON.stringify(cliente);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'clienteExist', params, { headers: headers });
  }

  addCliente(cliente){
    let json = JSON.stringify(cliente);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'add-cliente', params, { headers: headers });
  }

}

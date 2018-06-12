import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBALFACTURAS } from './globalFacturas';
@Injectable()
export class FacturasService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBALFACTURAS.url;
  }

  añadirFactura(factura){
    let json = JSON.stringify(factura);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'add-factura', params, { headers: headers });
  }

  obtenerFacturas(){
    return this._http.get(this.url + 'get-facturas');
  }

}

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

}

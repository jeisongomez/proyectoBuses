import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBALBUSES } from './globalBuses';

@Injectable()
export class BusesService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBALBUSES.url;
  }

  obtenerBus(idBus) {
    let json = JSON.stringify(idBus);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'bus-actual', params, { headers: headers });
  }
}

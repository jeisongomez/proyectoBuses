import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBALROLES } from './globalRoles';

@Injectable()
export class RolesService {

  public url: string;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBALROLES.url;
  }

  addRoles(Roles){
    let json = JSON.stringify(Roles);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(this.url + 'add-roles', params, { headers: headers });
  }

  obtenerIdRoles(){
    return this._http.get(this.url + 'get-id-rol');
  }

}

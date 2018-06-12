import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadosService } from '../../servicios/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadosService]
})
export class EmpleadosComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";

  public respuesta;
  public respuesta2;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadosService: EmpleadosService
  ) { }

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados(){
    this._empleadosService.obtenerEmpleados().subscribe( 
      response => {
        this.respuesta = response;
        //console.log(this.respuesta);
        this.respuesta2 = JSON.parse(this.respuesta._body);
        //console.log(this.respuesta2);
        if(this.respuesta2.code == 200){
          this.data = this.respuesta2.data;
          console.log(this.data);
        }else{
          alert('Algo salio mal!');
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

}

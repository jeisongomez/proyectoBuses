import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FacturasService } from '../../servicios/facturas.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css'],
  providers: [FacturasService]
})
export class DetalleFacturaComponent implements OnInit {

  public respuesta;
  public respuesta2;

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _facturasService: FacturasService
  ) { }

  ngOnInit() {
    this.facturas();
  }

  facturas(){
    this._facturasService.obtenerFacturas().subscribe(
      response => {
        this.respuesta = response;
        //console.log(this.respuesta);
        this.respuesta2 = JSON.parse(this.respuesta._body);
        console.log(this.respuesta2);
        if(this.respuesta2.code == 200){
          this.data = this.respuesta2.data;
        }else{
          alert('ALgo salio mal!');
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

}

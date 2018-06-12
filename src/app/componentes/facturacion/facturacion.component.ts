import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../../modelos/cliente';
import { ClienteService } from '../../servicios/cliente.service';
import { BusesService } from '../../servicios/buses.service';
import { FacturasService } from '../../servicios/facturas.service';
import { IdBus } from '../../modelos/idBus';
import { Factura } from '../../modelos/factura';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
  providers: [ClienteService, BusesService, FacturasService]
})
export class FacturacionComponent implements OnInit {

  public cliente: Cliente;
  public idBus: IdBus;
  public factura: Factura;
  public respuesta;
  public respuesta2;
  public vender;
  public crear;
  public newCliente;
  public usuario;
  public rutas;
  public rutaActual;
  public respuesta3;
  public respuesta4;
  public placaBus;
  public respuesta5;
  public respuesta6;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClienteService,
    private _busesService: BusesService,
    private _facturasService: FacturasService
  ) {
    this.cliente = new Cliente('', '', '', '');
    this.idBus = new IdBus(null);
    this.factura = new Factura(null, null, null, null);
  }

  ngOnInit() {
    this.obtenerUsuario();
    this.obtenerRutas();
  }

  obtenerUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('logueadoo'));
    console.log(this.usuario);
  }

  obtenerRutas() {
    this.rutas = JSON.parse(localStorage.getItem('rutas'));
    console.log(this.rutas);
  }

  onSubmit() {
    //console.log(this.cliente);
    this._clienteService.verificarCliente(this.cliente).subscribe(
      response => {
        this.respuesta = response;
        //console.log(this.respueta);
        this.respuesta2 = JSON.parse(this.respuesta._body);
        //console.log(this.respuesta2);
        if (this.respuesta2.code == 200) {
          this.vender = '0';
          this.crear = '1';
        } else {
          this.crear = '0';
          this.vender = '1';
          this.newCliente = this.respuesta2.data;
          console.log(this.newCliente);
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

  crearNew() {
    this._router.navigate(['cliente']);
  }

  elbus(value) {
    this._busesService.obtenerBus(value).subscribe(
      response => {
        this.respuesta3 = response;
        console.log(this.respuesta3);
        this.respuesta4 = JSON.parse(this.respuesta3._body);
        console.log(this.respuesta4);
        if (this.respuesta4.code == 200) {
          this.placaBus = this.respuesta4.data.Placa;
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

  datosFactura(ruta) {
    this.rutaActual = ruta;
    console.log(this.rutaActual);
    this.idBus.id = this.rutaActual.Buses_idBuses;
    //console.log(this.idBus);
    this.elbus(this.idBus);
    //console.log(this.newCliente);
    //console.log(this.usuario);
  }

  facturacion() {
    this.factura.Rutas_idRutas = this.rutaActual.idRutas;
    this.factura.Cliente_idCliente = this.newCliente.idCliente;
    this.factura.idEmpleado = this.usuario.idEmpleados;
    this.factura.precio = this.rutaActual.Precio;
    //console.log(this.factura);
    this._facturasService.añadirFactura(this.factura).subscribe(
      response => {
        this.respuesta5 = response;
        //console.log(this.respuesta5);
        this.respuesta6 = JSON.parse(this.respuesta5._body);
        if(this.respuesta6.code == 404){
          alert('La factura no se pudo crear');
        }else{
          alert('La factura se realizo correctamente');
          this._router.navigate(['home'])
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

}

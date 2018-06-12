import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../../modelos/cliente';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente;
  public respuesta;
  public respuesta2;
  public respuesta3;
  public respuesta4;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClienteService
  ) {
    this.cliente = new Cliente('', '', '', '');
  }

  ngOnInit() {
  }

  adicionarCliente() {
    this._clienteService.addCliente(this.cliente).subscribe(
      response1 => {
        this.respuesta3 = response1;
        this.respuesta4 = JSON.parse(this.respuesta3._body);
        //console.log(this.respuesta4);
      },
      error1 => {
        console.log(<any>error1);
        alert(<any>error1);
      }
    )
  }

  onSubmit() {
    this._clienteService.verificarCliente(this.cliente).subscribe(
      response => {
        this.respuesta = response;
        this.respuesta2 = JSON.parse(this.respuesta._body);
        //console.log(this.respuesta2);
        if (this.respuesta2.code == 400) {
          alert('Lo sentimos, el cliente con numero de identificacion ' + this.cliente.Documento + ' ya existe');
        } else {
          this.adicionarCliente();
          alert('El cliente se adiciono correctamente');
          this._router.navigate(['facturacion']);
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }

}

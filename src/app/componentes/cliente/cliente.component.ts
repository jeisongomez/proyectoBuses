import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../../modelos/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente;
  public respuesta;
  public respuesta2;
  public respuesta3;
  public respuesta4;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.cliente = new Cliente('', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

}

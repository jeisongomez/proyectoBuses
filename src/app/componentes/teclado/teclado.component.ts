import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public corcheteA;
  public corcheteC;
  public llaveA;
  public llaveC;
  public teclado;

  @Output() pasarDatos = new EventEmitter();

  emitirEvento(){
    this.pasarDatos.emit({
      'teclado': this.teclado
    });
  }

  constructor() {
    this.corcheteA = '[';
    this.corcheteC = ']';
    this.llaveA = '{';
    this.llaveC = '}';
  }

  ngOnInit() {
  }

}

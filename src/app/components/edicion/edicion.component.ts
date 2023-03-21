import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})

export class EdicionComponent implements OnInit {

  @Input() obj: any;
  @Input() array: any

  @Output()
  emitter = new EventEmitter<number>();

  datosEdicion: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  generarForm() {

    let indice: number = 0

    //Busca y emite el índice del objeto a editar
    if (this.array !== undefined) {

      indice = this.array.indexOf(this.obj)
    }

    this.datosEdicion =
    {
      'indice' : indice,
      'accion' : 'editar'
    }

    this.emitter.emit(this.datosEdicion)
  }

  borrarObjeto() {

    //Borra el componente
    const indice = this.array.indexOf(this.obj)

    this.datosEdicion =
    {
      'indice' : indice,
      'accion' : 'borrar'
    }

    this.emitter.emit(this.datosEdicion)
  }

}

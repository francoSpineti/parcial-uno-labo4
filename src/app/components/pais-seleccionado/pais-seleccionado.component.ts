import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';

@Component({
  selector: 'app-pais-seleccionado',
  templateUrl: './pais-seleccionado.component.html',
  styleUrls: ['./pais-seleccionado.component.css']
})
export class PaisSeleccionadoComponent implements OnInit {

  @Input() inputDetalleProducto!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}

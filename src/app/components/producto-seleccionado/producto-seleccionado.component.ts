import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';

@Component({
  selector: 'app-producto-seleccionado',
  templateUrl: './producto-seleccionado.component.html',
  styleUrls: ['./producto-seleccionado.component.css']
})
export class ProductoSeleccionadoComponent implements OnInit {

  @Input() inputDetalleProducto!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}

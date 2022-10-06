import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  productoSeleccionado !: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  cargarEventoProductoSeleccionado(producto : Producto){
    this.productoSeleccionado = producto;
  }

}

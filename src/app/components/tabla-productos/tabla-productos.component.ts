import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/classes/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  listaProductos : any;
  @Output() eventoProductoSeleccionado : EventEmitter<any> = new EventEmitter<any>();

  constructor(private service : ProductoService) { 
    this.listaProductos = this.service.obtenerProductos();
  }

  ngOnInit(): void {
  }

  seleccionarProductoEvento(producto : Producto){
    this.eventoProductoSeleccionado.emit(producto);
  }

}

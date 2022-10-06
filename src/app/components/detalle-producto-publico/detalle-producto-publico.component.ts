import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/classes/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-producto-publico',
  templateUrl: './detalle-producto-publico.component.html',
  styleUrls: ['./detalle-producto-publico.component.css']
})
export class DetalleProductoPublicoComponent implements OnInit {

  mostrarProductos : Array<Producto> = [];

  constructor(private service : ProductoService) {
    this.mostrarProductos = [];
    this.service.obtenerProductos().forEach(element => {
      if(element.stock > 0){
        this.mostrarProductos.push(element);
    }
    });
   }

  ngOnInit(): void {
  }

}

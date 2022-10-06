import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pais } from '../classes/pais';
import { Producto } from '../classes/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  dbPath : string = "/productos";
  private productoColeccion !: AngularFirestoreCollection<Producto>;
  productos : Observable<Producto[]>;
  producto !: Observable<Producto>;

  constructor(private afs: AngularFirestore) {
    this.productoColeccion = this.afs.collection<Producto>(this.dbPath);
    this.productos = this.productoColeccion.valueChanges(this.dbPath);
   }

   guardarProducto(codigo:string,descripcion:string,precio:number,stock:number,comestible:boolean,pais : Pais){
    const id = this.afs.createId();
    let producto = new Producto(id,codigo,descripcion,precio,stock,pais,comestible);
    this.afs.collection(this.dbPath).doc(id).set(producto.toJson());
  }

  obtenerProductos(){
    let aux : Array<Producto> = [];
    this.productos.forEach(element => {
      element.forEach(res => {
              aux.push(res);
      });
    });
    return aux;
  }
}

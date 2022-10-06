import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Container } from '../classes/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  dbPath : string = "/containers";
  private containersColeccion !: AngularFirestoreCollection<Container>;
  containers : Observable<Container[]>;
  container !: Observable<Container>;

  constructor(private afs: AngularFirestore) {
    this.containersColeccion = this.afs.collection<Container>(this.dbPath);
    this.containers = this.containersColeccion.valueChanges(this.dbPath);
   }

   guardar(container : Container){
    this.afs.collection(this.dbPath).doc(container.id).set(container.toJson());
  }

  modificar(container : Container){
    this.afs.collection(this.dbPath).doc(container.id.toString()).update(container.toJson());
  }
 
   borrar(container : Container){
     this.afs.collection(this.dbPath).doc(container.id.toString()).delete();
   }

  obtenerContainers(){
    let aux : Array<Container> = [];
    this.containers.forEach(element => {
      element.forEach(res => {
              aux.push(res);
      });
    });
    return aux;
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  dbPath : string = "/usuarios";
  private usuariosColeccion !: AngularFirestoreCollection<Usuario>;
  usuarios : Observable<Usuario[]>;
  usuario !: Observable<Usuario>;

  constructor(private afs: AngularFirestore,private db : AngularFirestore, private router : Router,private authService: AngularFireAuth) {
    this.usuariosColeccion = this.db.collection<Usuario>(this.dbPath);
    this.usuarios = this.usuariosColeccion.valueChanges(this.dbPath);
  }

  obtenerEmailUsuarioLogueado():string{
    let obj = JSON.parse(localStorage.getItem('user')!);
    return obj.email;
  }

  isAdmin(){
    let obj = JSON.parse(localStorage.getItem('user')!);
    return obj.perfil === 'admin';
  }

  estaLogueado(){
    let obj = JSON.parse(localStorage.getItem('user')!);
    return obj != null ? true : false;
  }

  obtenerUsuarioPorEmail(email:string) {
    return new Promise<any>((resolve)=> {
    this.db.collection(this.dbPath, ref => ref.where('email','==', email)).valueChanges().subscribe(users => resolve(users))})
  }

  registrar(email:string,contraseña:string, perfil ?: string){
    this.authService.createUserWithEmailAndPassword(email,contraseña)
    .then(res =>{
      this.conectarUsuario(email,false,perfil);
    })
    .catch(error => this.popUpMensaje('Error',error.message,true));
  }

  async conectarUsuario(email:string,login:boolean, perfil ?: string){
    await this.obtenerUsuarioPorEmail(email)
     .then(res =>{
      if(login){
        let user : Usuario = new Usuario(res[0].id,res[0].email,res[0].perfil);
        localStorage.setItem('user',JSON.stringify(user));
        this.afs.collection(this.dbPath).doc(res[0].id).update(user.toJson());
      }else{
        let id = this.afs.createId();
        let user : Usuario = new Usuario(id,email,perfil);
        localStorage.setItem('user',JSON.stringify(user));
        this.afs.collection(this.dbPath).doc(id).set(user.toJson());
        this.router.navigate(['/bienvenido']);
      }
    })
    .catch(error => console.log(error));
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/bienvenido']);
  }

  popUpMensaje(titulo : string,mensaje : string,error : boolean){
    Swal.fire(
       titulo,
       mensaje,
       error ? 'error' : 'success'
    )
  }
}

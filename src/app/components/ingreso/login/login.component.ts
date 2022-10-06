import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AbstractControl,FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup !: FormGroup;

  constructor(
     private formBuilder : FormBuilder,
     private authService: AngularFireAuth,
     private router: Router,
     private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'contraseña' : ['',Validators.required]
    });
  }

  login(){
     const email = this.formGroup.controls['email'].value;
     const contraseña = this.formGroup.controls['contraseña'].value;
     this.authService.signInWithEmailAndPassword(email,contraseña)
     .then(res =>{
      this.usuarioService.conectarUsuario(email,true)
      .then(resp =>{
        this.formGroup.reset();
        this.router.navigate(['/bienvenido']);
      })
      .catch(error => {
        this.formGroup.reset();
        this.popUpMensaje('Error',error.message,true)});
     })
     .catch(error => {
      this.formGroup.reset();
      this.popUpMensaje('Error',error.message,true)});
  }

  accesoRapidoJugador(){
    this.formGroup.controls['email'].setValue("empleado@gmail.com");
    this.formGroup.controls['contraseña'].setValue("1234567");
  }
  
  accesoRapidoAdmin(){
    this.formGroup.controls['email'].setValue("admin@gmail.com");
    this.formGroup.controls['contraseña'].setValue("1234567");
  }

  private spacesValidator(control : AbstractControl) : null | object{
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');
    return espacios == true? {contieneEspacios : true} : null;
  }

  popUpMensaje(titulo : string,mensaje : string,error : boolean){
    Swal.fire(
       titulo,
       mensaje,
       error ? 'error' : 'success'
    )
  }

}

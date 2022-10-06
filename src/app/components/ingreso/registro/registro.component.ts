import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup ,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formGroup !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private storage : AngularFireStorage,
    private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : ['',[Validators.required,Validators.email]],
      'contraseña' : ['',Validators.required],
      'perfil' : ['',[Validators.required,Validators.nullValidator]]
    });
  }

  registrarse(){
    const email = this.formGroup.controls['email'].value;
    const contraseña = this.formGroup.controls['contraseña'].value;
    const perfil = this.formGroup.controls['perfil'].value;
    this.usuarioService.registrar(email,contraseña,perfil);    
  }


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Container } from 'src/app/classes/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent implements OnInit {

  formGroup !: FormGroup;
  container !: Container;

  constructor(private formBuilder : FormBuilder,private service : ContainerService,private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'codigo' : ['',[Validators.required]],
      'color' : ['',[Validators.required]],
      'empresa' : ['',[Validators.required]],
      'capacidad' : ['',Validators.required]
    });
  }

  alta(){
    const codigo = this.formGroup.controls['codigo'].value;
    const color = this.formGroup.controls['color'].value;
    const empresa = this.formGroup.controls['empresa'].value;
    const capacidad = this.formGroup.controls['capacidad'].value;
    alert('container creado!');
    this.formGroup.reset();
    const id = this.afs.createId();
    let container = new Container(id,codigo,color,empresa,capacidad);
    this.service.guardar(container);
  }

 
}

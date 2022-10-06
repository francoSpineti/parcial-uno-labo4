import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Container } from 'src/app/classes/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-borrar-container',
  templateUrl: './borrar-container.component.html',
  styleUrls: ['./borrar-container.component.css']
})
export class BorrarContainerComponent implements OnInit,OnChanges {

  formGroup !: FormGroup;
  @Input() inputContainerSeleccionado !: Container;

  constructor(private formBuilder : FormBuilder,private service : ContainerService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'color' : ['',[Validators.required]],
      'empresa' : ['',[Validators.required]],
      'capacidad' : ['',Validators.required]
    });
  }

  ngOnChanges(){
    this.formGroup.controls['color'].setValue(this.inputContainerSeleccionado.color);
    this.formGroup.controls['empresa'].setValue(this.inputContainerSeleccionado.empresa);
    this.formGroup.controls['capacidad'].setValue(this.inputContainerSeleccionado.capacidad);
 }

 borrar(){
  alert('container borrado!');
  this.service.borrar(this.inputContainerSeleccionado);
  this.formGroup.reset();
}

}

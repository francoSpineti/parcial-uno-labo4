import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Container } from 'src/app/classes/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent implements OnInit,OnChanges {

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

  modificar(){
    const color = this.formGroup.controls['color'].value;
    const empresa = this.formGroup.controls['empresa'].value;
    const capacidad = this.formGroup.controls['capacidad'].value;
    let aux : Container = new Container(this.inputContainerSeleccionado.id,this.inputContainerSeleccionado.codigo,color,empresa,capacidad);
    alert('container modificado!');
    this.service.modificar(aux);
    this.formGroup.reset();
  }

}

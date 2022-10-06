import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Pais } from 'src/app/classes/pais';
import { Producto } from 'src/app/classes/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  formGroup !: FormGroup;
  paisSeleccionado !: Pais;
  actor !: Producto;

  constructor(private formBuilder : FormBuilder,private service : ProductoService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'codigo' : ['',[Validators.required]],
      'descripcion' : ['',[Validators.required]],
      'precio' : ['',[Validators.required]],
      'stock' : ['',Validators.required],
      'pais' : ['',Validators.required],
      'comestible' : ['',Validators.required],
    });
  }
  
    altaProducto(){
    const codigo = this.formGroup.controls['codigo'].value;
    const descripcion = this.formGroup.controls['descripcion'].value;
    const precio = this.formGroup.controls['precio'].value;
    const stock = this.formGroup.controls['stock'].value;
    const comestible = this.formGroup.controls['comestible'].value;
    alert('producto creado!');
    this.formGroup.reset();
    this.service.guardarProducto(codigo,descripcion,precio,stock,comestible,this.paisSeleccionado);
  }

  cargarPaisSeleccionado(pais: Pais){
    this.formGroup.controls['pais'].setValue(pais.name);
    this.paisSeleccionado = pais;
  }

}

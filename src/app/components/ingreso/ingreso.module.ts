import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   LoginComponent,
   RegistroComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class IngresoModule { }

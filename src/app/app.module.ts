import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngresoRoutingModule } from './components/ingreso/ingreso-routing.module';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { DetalleProductoPublicoComponent } from './components/detalle-producto-publico/detalle-producto-publico.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { ProductoSeleccionadoComponent } from './components/producto-seleccionado/producto-seleccionado.component';
import { PaisSeleccionadoComponent } from './components/pais-seleccionado/pais-seleccionado.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    AltaProductoComponent,
    TablaPaisesComponent,
    DetalleProductoComponent,
    DetalleProductoPublicoComponent,
    TablaProductosComponent,
    ProductoSeleccionadoComponent,
    PaisSeleccionadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    NoopAnimationsModule,
    AngularFireStorageModule,
    IngresoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

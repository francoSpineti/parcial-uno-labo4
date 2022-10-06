import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ContainersComponent } from './components/containers/containers.component';
import { DetalleProductoPublicoComponent } from './components/detalle-producto-publico/detalle-producto-publico.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
    {path: 'bienvenido', component: BienvenidaComponent},
    {path : '', redirectTo : 'bienvenido', pathMatch : 'full'},
    {path: 'altaProducto', component: AltaProductoComponent,canActivate:[AuthGuardGuard]},
    {path: 'containers', component: ContainersComponent,canActivate:[AuthGuardGuard]},
    {path: 'detalleProducto', component: DetalleProductoComponent,canActivate:[AuthGuardGuard]},
    {path: 'detalleProductoPublicos', component: DetalleProductoPublicoComponent},
    { path: 'ingreso', loadChildren: () => import('./components/ingreso/ingreso.module').then(m => m.IngresoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

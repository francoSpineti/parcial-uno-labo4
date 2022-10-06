import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
    {path: 'bienvenido', component: BienvenidaComponent},
    {path : '', redirectTo : 'bienvenido', pathMatch : 'full'},
    {path: 'altaProducto', component: AltaProductoComponent,canActivate:[AuthGuardGuard]},
    { path: 'ingreso', loadChildren: () => import('./components/ingreso/ingreso.module').then(m => m.IngresoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

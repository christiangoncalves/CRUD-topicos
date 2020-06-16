import { PerfilRecursoListaComponent } from '../perfil-recurso/perfil-recurso-lista/perfil-recurso-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PerfilRecursoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRecursoRoutingModule { }

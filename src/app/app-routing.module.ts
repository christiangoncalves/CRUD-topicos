import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)
  },
  {
    path: 'recurso',
    loadChildren: () => import('./recurso/recurso.module').then(p=>p.RecursoModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(p=>p.PerfilModule)
  },
  {
    path: 'grupo',
    loadChildren: () => import('./grupo/grupo.module').then(p =>p.GrupoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(p =>p.LoginModule)
  },
  {
    path: 'anotacao',
    loadChildren: () => import('./anotacao/anotacao.module').then(p =>p.AnotacaoModule)
  },
  {
    path: 'perfilrecurso',
    loadChildren: () => import('./perfil-recurso/perfil-recurso.module').then(p =>p.PerfilRecursoModule)
  },
  {
    path: '',
    redirectTo: 'pessoa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

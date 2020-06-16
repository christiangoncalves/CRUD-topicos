import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaGrupoRoutingModule } from './pessoa-grupo-routing.module';
import { PessoaGrupoListaComponent } from './pessoa-grupo-lista/pessoa-grupo-lista.component';


@NgModule({
  declarations: [PessoaGrupoListaComponent],
  imports: [
    CommonModule,
    PessoaGrupoRoutingModule
  ]
})
export class PessoaGrupoModule { }

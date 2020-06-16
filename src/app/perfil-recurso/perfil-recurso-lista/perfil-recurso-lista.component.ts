import { PerfilRecurso } from './../perfil-recurso.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PerfilRecursoService } from './../perfil-recurso.service';


@Component({
  selector: 'app-perfil-recurso-lista',
  templateUrl: './perfil-recurso-lista.component.html',
  styleUrls: ['./perfil-recurso-lista.component.css']
})
export class PerfilRecursoListaComponent implements OnInit {

  perfil_recurso: Observable<PerfilRecurso[]>;

  constructor(private perfil_recursoService: PerfilRecursoService) { }

  ngOnInit(): void {
    this.perfil_recurso = this.perfil_recursoService.getPerfilRecurso();
  }

}

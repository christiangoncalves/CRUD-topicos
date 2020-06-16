import { GrupoService } from './../grupo.service';
import { Grupo } from './../grupo.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.css']
})
export class GrupoListaComponent implements OnInit {

  grupo: Observable<Grupo[]>;

  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.grupo = this.grupoService.getGrupo();
  }

}

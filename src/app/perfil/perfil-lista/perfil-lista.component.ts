import { PerfilService } from './../perfil.service';
import { Perfil } from './../perfil.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfil: Observable<Perfil[]>;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfil = this.perfilService.getPerfil();
  }

}

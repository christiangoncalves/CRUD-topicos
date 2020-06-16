import { Observable } from 'rxjs';
import { Recurso } from './../recurso.interface';
import { RecursoService } from './../recurso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.css']
})
export class RecursoListaComponent implements OnInit {

  recurso: Observable<Recurso[]>;

  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.recurso = this.recursoService.getRecurso();
  }

}

import { Observable } from 'rxjs';
import { Anotacao } from './../Anotacao.interface';
import { AnotacaoService } from './../Anotacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.css']
})
export class AnotacaoListaComponent implements OnInit {

  anotacao: Observable<Anotacao[]>;

  constructor(private anotacaoService: AnotacaoService) { }

  ngOnInit(): void {
    this.anotacao = this.anotacaoService.getAnotacao();
  }

}

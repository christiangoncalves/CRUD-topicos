import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Pessoa } from '../pessoa.interface';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css']
})
export class PessoaFormularioComponent implements OnInit {

  constructor(private service: PessoaService, private router:Router) { }

  pessoa : Pessoa  = {
    id : Math.floor(1000000 * Math.random()),
    nome : ''
  }

  ngOnInit(): void {
  }

  salvar(pessoa): void{

    if(pessoa.nome.length > 0)
    {
      this.service.postPessoa(pessoa).subscribe(
        data =>{
            this.ngOnInit();
        },
        error=>{
          alert('sua api não presta!');
        }
      )
    }

  }

}

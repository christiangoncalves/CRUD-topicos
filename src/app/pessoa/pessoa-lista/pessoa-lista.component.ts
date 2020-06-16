import { Observable } from 'rxjs';
import { Pessoa } from './../pessoa.interface';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  pessoa: Observable<Pessoa[]>;

  pessoa_post: Pessoa;
  
  constructor(private pessoaService: PessoaService, private router:Router) { }

  ngOnInit(): void {
    this.pessoa = this.pessoaService.getPessoa();
    this.pessoa_post = {
      id : Math.floor(1000000 * Math.random()),
      nome : ''
    }
  }

  apagar(id:number): void {
    this.pessoaService.deletePessoa(id).subscribe(
      data =>{
          this.ngOnInit();
      },
      error=>{
        alert('sua api não presta!');
      }
    );
  }

  salvar(pessoa_post): void{

    if(pessoa_post.nome.length > 0)
    {
      this.pessoaService.postPessoa(pessoa_post).subscribe(
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

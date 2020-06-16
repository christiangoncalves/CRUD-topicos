import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http:HttpClient) { }

  getPessoa() : Observable<any>
  {
    return this.http.get('https://localhost:44314/api/pessoas/1/100');
  }

  postPessoa( pessoa: Pessoa):Observable<Pessoa>
  {
    return this.http.post<Pessoa>('https://localhost:44314/api/pessoas', pessoa);
  }

  deletePessoa( id : number ):Observable<any>
  {
    return this.http.delete('https://localhost:44314/api/pessoas/'+id);
  }

}

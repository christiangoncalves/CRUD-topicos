import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilRecursoService {

  constructor(private http:HttpClient) { }

  getPerfilRecurso() : Observable<any>{
    return this.http.get('https://localhost:44314/api/perfisrecursos/1/100');
  }
}

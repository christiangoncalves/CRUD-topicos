import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http:HttpClient) { }

  getGrupo() : Observable<any>{
    return this.http.get('https://localhost:44314/api/grupos/1/100');
  }
}

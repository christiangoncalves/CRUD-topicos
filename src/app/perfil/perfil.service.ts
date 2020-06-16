import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) { }

  getPerfil() : Observable<any>{
    return this.http.get('https://localhost:44314/api/perfis/1/100');
  }
}

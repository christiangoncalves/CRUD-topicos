import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLogin() : Observable<any>{
    return this.http.get('https://localhost:44314/api/logins/1/100');
  }
}

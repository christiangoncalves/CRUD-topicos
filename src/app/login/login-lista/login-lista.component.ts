import { LoginService } from './../login.service';
import { Login } from './../login.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-lista',
  templateUrl: './login-lista.component.html',
  styleUrls: ['./login-lista.component.css']
})
export class LoginListaComponent implements OnInit {

  login: Observable<Login[]>;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.login = this.loginService.getLogin();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilRecursoListaComponent } from './perfil-recurso/perfil-recurso-lista/perfil-recurso-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilRecursoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

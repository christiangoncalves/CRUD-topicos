import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRecursoListaComponent } from './perfil-recurso-lista.component';

describe('PerfilRecursoListaComponent', () => {
  let component: PerfilRecursoListaComponent;
  let fixture: ComponentFixture<PerfilRecursoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilRecursoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRecursoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

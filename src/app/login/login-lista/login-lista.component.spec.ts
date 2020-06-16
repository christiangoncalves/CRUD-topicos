import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginListaComponent } from './login-lista.component';

describe('LoginListaComponent', () => {
  let component: LoginListaComponent;
  let fixture: ComponentFixture<LoginListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

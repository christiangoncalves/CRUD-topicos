import { TestBed } from '@angular/core/testing';

import { PerfilRecursoService } from './perfil-recurso.service';

describe('PerfilRecursoService', () => {
  let service: PerfilRecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilRecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

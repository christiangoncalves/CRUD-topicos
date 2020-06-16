import { TestBed } from '@angular/core/testing';

import { PessoaGrupoService } from './pessoa-grupo.service';

describe('PessoaGrupoService', () => {
  let service: PessoaGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

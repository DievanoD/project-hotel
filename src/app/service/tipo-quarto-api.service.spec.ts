import { TestBed } from '@angular/core/testing';

import { TipoQuartoApiService } from './tipo-quarto-api.service';

describe('TipoQuartoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoQuartoApiService = TestBed.get(TipoQuartoApiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { QuartoApiService } from './quarto-api.service';

describe('QuartoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuartoApiService = TestBed.get(QuartoApiService);
    expect(service).toBeTruthy();
  });
});

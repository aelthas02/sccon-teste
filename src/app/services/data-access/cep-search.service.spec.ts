import { TestBed } from '@angular/core/testing';
import { CepSearch } from './cep-search.service';

describe('CepSearch', () => {
  let service: CepSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

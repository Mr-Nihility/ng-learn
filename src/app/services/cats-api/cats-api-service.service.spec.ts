import { TestBed } from '@angular/core/testing';

import { CatsApiServiceService } from './cats-api-service.service';

describe('CatsApiServiceService', () => {
  let service: CatsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

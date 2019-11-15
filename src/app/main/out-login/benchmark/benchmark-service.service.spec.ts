import { TestBed } from '@angular/core/testing';

import { BenchmarkServiceService } from './benchmark-service.service';

describe('BenchmarkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenchmarkServiceService = TestBed.get(BenchmarkServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FillResultService } from './fill-result.service';

describe('FillResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FillResultService = TestBed.get(FillResultService);
    expect(service).toBeTruthy();
  });
});

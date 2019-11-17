import { TestBed } from '@angular/core/testing';

import { UniverDetailService } from './univer-detail.service';

describe('UniverDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniverDetailService = TestBed.get(UniverDetailService);
    expect(service).toBeTruthy();
  });
});

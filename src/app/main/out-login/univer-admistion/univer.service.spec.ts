import { TestBed } from '@angular/core/testing';

import { UniverService } from './univer.service';

describe('UniverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniverService = TestBed.get(UniverService);
    expect(service).toBeTruthy();
  });
});

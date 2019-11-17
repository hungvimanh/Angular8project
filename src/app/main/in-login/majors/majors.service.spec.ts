import { TestBed } from '@angular/core/testing';

import { MajorsService } from './majors.service';

describe('MajorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MajorsService = TestBed.get(MajorsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UniversityDetailAdminService } from './university-detail-admin.service';

describe('UniversityDetailAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversityDetailAdminService = TestBed.get(UniversityDetailAdminService);
    expect(service).toBeTruthy();
  });
});

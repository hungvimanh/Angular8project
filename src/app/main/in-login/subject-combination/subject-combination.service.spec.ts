import { TestBed } from '@angular/core/testing';

import { SubjectCombinationService } from './subject-combination.service';

describe('SubjectCombinationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectCombinationService = TestBed.get(SubjectCombinationService);
    expect(service).toBeTruthy();
  });
});

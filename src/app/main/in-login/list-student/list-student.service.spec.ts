import { TestBed } from '@angular/core/testing';

import { ListStudentService } from './list-student.service';

describe('ListStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListStudentService = TestBed.get(ListStudentService);
    expect(service).toBeTruthy();
  });
});

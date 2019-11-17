import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDetailAdminComponent } from './university-detail-admin.component';

describe('UniversityDetailAdminComponent', () => {
  let component: UniversityDetailAdminComponent;
  let fixture: ComponentFixture<UniversityDetailAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDetailAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

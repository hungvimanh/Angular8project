import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCombinationComponent } from './subject-combination.component';

describe('SubjectCombinationComponent', () => {
  let component: SubjectCombinationComponent;
  let fixture: ComponentFixture<SubjectCombinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectCombinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

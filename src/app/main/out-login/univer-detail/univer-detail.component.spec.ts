import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverDetailComponent } from './univer-detail.component';

describe('UniverDetailComponent', () => {
  let component: UniverDetailComponent;
  let fixture: ComponentFixture<UniverDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

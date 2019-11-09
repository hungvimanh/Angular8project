import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverAdmistionComponent } from './univer-admistion.component';

describe('UniverAdmistionComponent', () => {
  let component: UniverAdmistionComponent;
  let fixture: ComponentFixture<UniverAdmistionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverAdmistionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverAdmistionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

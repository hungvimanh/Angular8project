import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillResultComponent } from './fill-result.component';

describe('FillResultComponent', () => {
  let component: FillResultComponent;
  let fixture: ComponentFixture<FillResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

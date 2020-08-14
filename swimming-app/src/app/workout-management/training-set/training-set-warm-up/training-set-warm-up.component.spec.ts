import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetWarmUpComponent } from './training-set-warm-up.component';

describe('TrainingSetWarmUpComponent', () => {
  let component: TrainingSetWarmUpComponent;
  let fixture: ComponentFixture<TrainingSetWarmUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetWarmUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetWarmUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetMajorExerciseComponent } from './training-set-major-exercise.component';

describe('TrainingSetMajorExerciseComponent', () => {
  let component: TrainingSetMajorExerciseComponent;
  let fixture: ComponentFixture<TrainingSetMajorExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetMajorExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetMajorExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

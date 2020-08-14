import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningWorkoutComponent } from './planing-workout.component';

describe('PlaningWorkoutComponent', () => {
  let component: PlaningWorkoutComponent;
  let fixture: ComponentFixture<PlaningWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaningWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPartPlanComponent } from './workout-part-plan.component';

describe('WorkouPartPlanComponent', () => {
  let component: WorkoutPartPlanComponent;
  let fixture: ComponentFixture<WorkoutPartPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutPartPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutPartPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

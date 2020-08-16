import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCalenderComponent } from './workout-calender.component';

describe('WorkoutCalenderComponent', () => {
  let component: WorkoutCalenderComponent;
  let fixture: ComponentFixture<WorkoutCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

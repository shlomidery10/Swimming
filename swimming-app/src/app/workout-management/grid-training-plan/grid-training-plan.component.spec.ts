import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTrainingPlanComponent } from './grid-training-plan.component';

describe('GridTrainingPlanComponent', () => {
  let component: GridTrainingPlanComponent;
  let fixture: ComponentFixture<GridTrainingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTrainingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTrainingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCellComponent } from './training-cell.component';

describe('TrainingCellComponent', () => {
  let component: TrainingCellComponent;
  let fixture: ComponentFixture<TrainingCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

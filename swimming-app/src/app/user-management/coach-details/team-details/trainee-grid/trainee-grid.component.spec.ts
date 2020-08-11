import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeGridComponent } from './trainee-grid.component';

describe('TraineeGridComponent', () => {
  let component: TraineeGridComponent;
  let fixture: ComponentFixture<TraineeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

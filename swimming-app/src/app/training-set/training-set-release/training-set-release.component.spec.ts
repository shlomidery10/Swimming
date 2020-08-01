import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetReleaseComponent } from './training-set-release.component';

describe('TrainingSetReleaseComponent', () => {
  let component: TrainingSetReleaseComponent;
  let fixture: ComponentFixture<TrainingSetReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

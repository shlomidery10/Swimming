import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitDistanceComponent } from './split-distance.component';

describe('SplitDistanceComponent', () => {
  let component: SplitDistanceComponent;
  let fixture: ComponentFixture<SplitDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

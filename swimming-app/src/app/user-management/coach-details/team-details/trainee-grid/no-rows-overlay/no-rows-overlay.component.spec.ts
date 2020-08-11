import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRowsOverlayComponent } from './no-rows-overlay.component';

describe('NoRowsOverlayComponentComponent', () => {
  let component: NoRowsOverlayComponent;
  let fixture: ComponentFixture<NoRowsOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRowsOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRowsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

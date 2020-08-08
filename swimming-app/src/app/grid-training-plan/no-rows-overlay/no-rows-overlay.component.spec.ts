import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRowsOverlayComponentComponent } from './no-rows-overlay-component.component';

describe('NoRowsOverlayComponentComponent', () => {
  let component: NoRowsOverlayComponentComponent;
  let fixture: ComponentFixture<NoRowsOverlayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRowsOverlayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRowsOverlayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

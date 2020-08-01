import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormAutowidthFieldComponent } from './mat-form-autowidth-field.component';

describe('MatFormAutowidthFieldComponent', () => {
  let component: MatFormAutowidthFieldComponent;
  let fixture: ComponentFixture<MatFormAutowidthFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormAutowidthFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormAutowidthFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

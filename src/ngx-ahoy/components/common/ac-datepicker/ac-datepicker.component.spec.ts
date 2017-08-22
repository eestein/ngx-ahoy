import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcDatepickerComponent } from './ac-datepicker.component';

describe('AcDatepickerComponent', () => {
  let component: AcDatepickerComponent;
  let fixture: ComponentFixture<AcDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcLoadbuttonComponent } from './ac-loadbutton.component';

describe('AcLoadbuttonComponent', () => {
  let component: AcLoadbuttonComponent;
  let fixture: ComponentFixture<AcLoadbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcLoadbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcLoadbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

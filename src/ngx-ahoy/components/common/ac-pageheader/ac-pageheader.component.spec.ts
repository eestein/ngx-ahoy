import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcPageheaderComponent } from './ac-pageheader.component';

describe('AcPageheaderComponent', () => {
  let component: AcPageheaderComponent;
  let fixture: ComponentFixture<AcPageheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcPageheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcPageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

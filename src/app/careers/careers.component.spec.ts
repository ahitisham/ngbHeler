import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAREERSComponent } from './careers.component';

describe('CAREERSComponent', () => {
  let component: CAREERSComponent;
  let fixture: ComponentFixture<CAREERSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAREERSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAREERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

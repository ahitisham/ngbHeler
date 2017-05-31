import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CONDITIONSComponent } from './conditions.component';

describe('CONDITIONSComponent', () => {
  let component: CONDITIONSComponent;
  let fixture: ComponentFixture<CONDITIONSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CONDITIONSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CONDITIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

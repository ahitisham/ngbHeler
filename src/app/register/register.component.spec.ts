import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REGISTERComponent } from './register.component';

describe('REGISTERComponent', () => {
  let component: REGISTERComponent;
  let fixture: ComponentFixture<REGISTERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REGISTERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REGISTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GALLERYComponent } from './gallery.component';

describe('GALLERYComponent', () => {
  let component: GALLERYComponent;
  let fixture: ComponentFixture<GALLERYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GALLERYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GALLERYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

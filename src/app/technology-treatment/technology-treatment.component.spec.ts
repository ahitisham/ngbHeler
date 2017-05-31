import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTreatmentComponent } from './technology-treatment.component';

describe('TechnologyTreatmentComponent', () => {
  let component: TechnologyTreatmentComponent;
  let fixture: ComponentFixture<TechnologyTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTemplateComponent } from './flight-template.component';

describe('FlightTemplateComponent', () => {
  let component: FlightTemplateComponent;
  let fixture: ComponentFixture<FlightTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

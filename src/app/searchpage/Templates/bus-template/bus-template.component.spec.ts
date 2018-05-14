import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTemplateComponent } from './bus-template.component';

describe('BusTemplateComponent', () => {
  let component: BusTemplateComponent;
  let fixture: ComponentFixture<BusTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

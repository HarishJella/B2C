import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTemplateComponent } from './hotel-template.component';

describe('HotelTemplateComponent', () => {
  let component: HotelTemplateComponent;
  let fixture: ComponentFixture<HotelTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

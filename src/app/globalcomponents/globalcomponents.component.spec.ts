import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcomponentsComponent } from './globalcomponents.component';

describe('GlobalcomponentsComponent', () => {
  let component: GlobalcomponentsComponent;
  let fixture: ComponentFixture<GlobalcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

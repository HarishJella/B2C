import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooComponent } from './boo.component';

describe('BooComponent', () => {
  let component: BooComponent;
  let fixture: ComponentFixture<BooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

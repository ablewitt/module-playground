import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aye1Component } from './aye1.component';

describe('Aye1Component', () => {
  let component: Aye1Component;
  let fixture: ComponentFixture<Aye1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aye1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aye1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

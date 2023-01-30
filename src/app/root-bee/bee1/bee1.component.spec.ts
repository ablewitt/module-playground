import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bee1Component } from './bee1.component';

describe('Bee1Component', () => {
  let component: Bee1Component;
  let fixture: ComponentFixture<Bee1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bee1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

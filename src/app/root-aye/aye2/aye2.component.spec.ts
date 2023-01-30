import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aye2Component } from './aye2.component';

describe('Aye2Component', () => {
  let component: Aye2Component;
  let fixture: ComponentFixture<Aye2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aye2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aye2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

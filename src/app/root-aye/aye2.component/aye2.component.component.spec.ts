import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aye2ComponentComponent } from './aye2.component.component';

describe('Aye2ComponentComponent', () => {
  let component: Aye2ComponentComponent;
  let fixture: ComponentFixture<Aye2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aye2ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aye2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

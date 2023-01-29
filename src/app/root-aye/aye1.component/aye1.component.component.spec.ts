import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aye1ComponentComponent } from './aye1.component.component';

describe('Aye1ComponentComponent', () => {
  let component: Aye1ComponentComponent;
  let fixture: ComponentFixture<Aye1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aye1ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aye1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

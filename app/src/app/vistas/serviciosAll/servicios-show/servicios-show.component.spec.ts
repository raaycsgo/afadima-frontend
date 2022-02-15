import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosShowComponent } from './servicios-show.component';

describe('ServiciosShowComponent', () => {
  let component: ServiciosShowComponent;
  let fixture: ComponentFixture<ServiciosShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTablaComponent } from './servicios-tabla.component';

describe('ServiciosTablaComponent', () => {
  let component: ServiciosTablaComponent;
  let fixture: ComponentFixture<ServiciosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

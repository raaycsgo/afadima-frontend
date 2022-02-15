import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosTablaPruebaComponent } from './socios-tabla-prueba.component';

describe('SociosTablaPruebaComponent', () => {
  let component: SociosTablaPruebaComponent;
  let fixture: ComponentFixture<SociosTablaPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociosTablaPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosTablaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscapacidadTablaComponent } from './discapacidad-tabla.component';

describe('DiscapacidadTablaComponent', () => {
  let component: DiscapacidadTablaComponent;
  let fixture: ComponentFixture<DiscapacidadTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscapacidadTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscapacidadTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

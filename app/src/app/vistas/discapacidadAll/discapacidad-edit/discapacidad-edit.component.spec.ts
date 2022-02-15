import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscapacidadEditComponent } from './discapacidad-edit.component';

describe('DiscapacidadEditComponent', () => {
  let component: DiscapacidadEditComponent;
  let fixture: ComponentFixture<DiscapacidadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscapacidadEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscapacidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

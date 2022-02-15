import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerarioTablaComponent } from './numerario-tabla.component';

describe('NumerarioTablaComponent', () => {
  let component: NumerarioTablaComponent;
  let fixture: ComponentFixture<NumerarioTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerarioTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerarioTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

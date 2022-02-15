import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerarioEditComponent } from './numerario-edit.component';

describe('NumerarioEditComponent', () => {
  let component: NumerarioEditComponent;
  let fixture: ComponentFixture<NumerarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerarioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

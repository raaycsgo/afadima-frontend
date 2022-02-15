import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerarioNewComponent } from './numerario-new.component';

describe('NumerarioNewComponent', () => {
  let component: NumerarioNewComponent;
  let fixture: ComponentFixture<NumerarioNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerarioNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerarioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

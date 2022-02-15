import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscapacidadNewComponent } from './discapacidad-new.component';

describe('DiscapacidadNewComponent', () => {
  let component: DiscapacidadNewComponent;
  let fixture: ComponentFixture<DiscapacidadNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscapacidadNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscapacidadNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

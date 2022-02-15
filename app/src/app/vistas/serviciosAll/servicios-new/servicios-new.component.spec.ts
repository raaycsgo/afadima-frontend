import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosNewComponent } from './servicios-new.component';

describe('ServiciosNewComponent', () => {
  let component: ServiciosNewComponent;
  let fixture: ComponentFixture<ServiciosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

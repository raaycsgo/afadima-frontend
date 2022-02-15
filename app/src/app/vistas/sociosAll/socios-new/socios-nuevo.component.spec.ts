import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosNuevoComponent } from './socios-nuevo.component';

describe('SociosNuevoComponent', () => {
  let component: SociosNuevoComponent;
  let fixture: ComponentFixture<SociosNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociosNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

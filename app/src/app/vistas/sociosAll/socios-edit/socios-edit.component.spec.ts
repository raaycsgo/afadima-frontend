import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosEditComponent } from './socios-edit.component';

describe('SociosEditComponent', () => {
  let component: SociosEditComponent;
  let fixture: ComponentFixture<SociosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

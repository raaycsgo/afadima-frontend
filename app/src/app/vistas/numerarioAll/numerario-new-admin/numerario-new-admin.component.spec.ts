import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerarioNewAdminComponent } from './numerario-new-admin.component';

describe('NumerarioNewAdminComponent', () => {
  let component: NumerarioNewAdminComponent;
  let fixture: ComponentFixture<NumerarioNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerarioNewAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerarioNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

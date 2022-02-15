import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasTablaComponent } from './noticias-tabla.component';

describe('NoticiasTablaComponent', () => {
  let component: NoticiasTablaComponent;
  let fixture: ComponentFixture<NoticiasTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

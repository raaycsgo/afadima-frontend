import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCardsComponent } from './producto-cards.component';

describe('ProductoCardsComponent', () => {
  let component: ProductoCardsComponent;
  let fixture: ComponentFixture<ProductoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

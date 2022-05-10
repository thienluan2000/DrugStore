import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchlistComponent } from './product-searchlist.component';

describe('ProductSearchlistComponent', () => {
  let component: ProductSearchlistComponent;
  let fixture: ComponentFixture<ProductSearchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

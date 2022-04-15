import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClassifyComponent } from './product-classify.component';

describe('ProductClassifyComponent', () => {
  let component: ProductClassifyComponent;
  let fixture: ComponentFixture<ProductClassifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductClassifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

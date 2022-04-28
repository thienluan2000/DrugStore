import { Component, Input,HostBinding } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'product-image',
  template: `
  <img class="card-img-top img-fluid border " [src]="product.imageUrl" style="height: 20rem;">
  `
})
export class ProductImageComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit(): void {
  }

}

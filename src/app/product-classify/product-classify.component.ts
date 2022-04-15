import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'product-classify',
  templateUrl: './product-classify.component.html',
  styleUrls: ['./product-classify.component.scss']
})
export class ProductClassifyComponent {
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}

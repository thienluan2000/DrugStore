import { Component,Input,HostBinding  } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-col',
  templateUrl: './product-col.component.html',
  styleUrls: ['./product-col.component.scss']
})
export class ProductColComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() { }

}

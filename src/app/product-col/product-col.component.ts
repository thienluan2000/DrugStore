import { Component, Input } from '@angular/core';
import { IProductModel } from '../../models/product.model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'product-col',
  templateUrl: './product-col.component.html',
  styleUrls: ['./product-col.component.scss']
})
export class ProductColComponent {
  @Input() product: IProductModel | null = null;
  constructor(private cartService: CartService) { }
  public addToCart(product: IProductModel) {
    this.cartService.addToCart(product);
  }


}

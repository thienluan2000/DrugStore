import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { IProductModel } from 'src/models/product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  @Input() item!: IProductModel | null;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeProduct(item: IProductModel) {
    this.cartService.removeProduct(item);
  }


}
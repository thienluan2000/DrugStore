import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { IProductModel } from '../../models/product.model';
import { CartService } from 'src/services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public selectedProduct: IProductModel | null = null;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    const productId = String(this.route.snapshot.paramMap.get('productId'));
    this.productService.getProductDetail(productId).subscribe(res => {
      console.log(res);
      this.selectedProduct = res;
    });
  }

  addToCart(selectedProduct: IProductModel) {
    this.cartService.addToCart(selectedProduct);
  }

}

import { Component, OnInit ,Input,HostBinding} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model'; 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
 
})
export class ProductDetailsComponent  {
  @Input() product!: Product|undefined;
  @Input() productList!: Product[];
  @HostBinding('attr.class') cssClass = 'item';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
    this.product = this.productList.find(product => product.id === productIdFromRoute);
  }

}

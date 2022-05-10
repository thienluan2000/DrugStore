import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-searchlist',
  templateUrl: './product-searchlist.component.html',
  styleUrls: ['./product-searchlist.component.scss']
})
export class ProductSearchlistComponent implements OnInit {
  public products: IProductModel[] = [];
  constructor(private productService: ProductService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const keyword = String(routeParams.get('keyword'));

    this.productService.getGlobalSearchList(keyword).subscribe(res => {
      this.products = res;
    });


  }


}

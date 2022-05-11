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
    private route: ActivatedRoute,) {
    console.log(location.search);
  }

  ngOnInit(): void {

    console.log(this.route.snapshot.queryParamMap.get('key'));
    const searchKeywords = String(this.route.snapshot.queryParamMap.get('key'));

    this.productService.getGlobalSearchList(searchKeywords).subscribe(res => {
      console.log();
      this.products = res;
    });

  }

}

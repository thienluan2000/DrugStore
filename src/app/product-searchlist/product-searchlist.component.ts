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

    // const routeParams = this.route.snapshot.queryParamMap;
    // const searchKeywords = String(routeParams.get('searchKeywords'));

    // this.productService.getGlobalSearchList(searchKeywords).subscribe(res => {
    //   console.log();
    //   this.products = res;
    // });


    //focus on this
    // getGlobalSearchList(): void {
    //   const key = +this.route.snapshot.queryParamMap.get("key");
    //   this.productService.getGlobalSearchList()
    //     .subscribe(res => this.products = res.filter((el, index) => index < key ? key : res.length + 1));
    // }


  }

}

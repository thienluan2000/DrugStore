import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: IProductModel[] = [];
  public selectedPage: number = 1;
  public pageSize: number = 8;
  public currentProduct: IProductModel | null = null;
  typeList: string = '';
  constructor(private productService: ProductService, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    const searchKeywords: string = (snapshot.queryParamMap.get('key') || '');
    const typeId: string = (snapshot.queryParamMap.get('keyId') || '');
    this.typeList = typeId;
    console.log(searchKeywords, typeId);
    this.productService.getList(searchKeywords, typeId).subscribe(res => {
      this.products = (res || []);
      this.products.sort((a: IProductModel, b: IProductModel) => a.price - b.price);
    });
  }


}

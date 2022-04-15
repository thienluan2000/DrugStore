import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'drugstore-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DrugStore';
  products : Product[];

  constructor(){
    this.products=[
      new Product(
        'Kit test covid',
        '/assets/images/kittest.jpg',
        5,
        ['Dụng cụ y tế','kittest']
        ),
      new Product(
        'Khẩu trang y tế loại 1',
        '/assets/images/mask.jpg',
        1,
        ['Khẩu trang','khẩu trang y tế loại 1']
        ),
      new Product(
        'Siro ho',
        '/assets/images/siro.jpg',
        10,
        ['Thuốc','siro']
        )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
    }
}


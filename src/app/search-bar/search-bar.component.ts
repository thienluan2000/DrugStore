import { Component,Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent  {
  @Input() productList!: Product[];
  searchedKeyword!: string;
  constructor() {
  
    }

  ngOnInit(): void {
  }

}

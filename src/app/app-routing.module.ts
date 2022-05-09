import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductsContentComponent } from './products-content/products-content.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: ProductsContentComponent },
    { path: 'product/:productId', component: ProductDetailsComponent },
    { path: 'productSearched', component: ProductSearchComponent },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

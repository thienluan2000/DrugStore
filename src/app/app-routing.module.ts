import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsContentComponent } from './products-content/products-content.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: ProductsContentComponent},
    { path: 'product/:productId', component: ProductDetailsComponent },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

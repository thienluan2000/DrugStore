import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsContentComponent } from './products-content/products-content.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: ProductsContentComponent},
    { path: 'product/:productId', component: ProductDetailsComponent },
    { path: 'contact', component:ContactComponent},
    { path: 'signUp', component:SignUpComponent},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

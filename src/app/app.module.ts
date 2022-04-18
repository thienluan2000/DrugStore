import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductColComponent } from './product-col/product-col.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductClassifyComponent } from './product-classify/product-classify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    NavbarComponent,
    MenuComponent,
    ProductsListComponent,
    ProductColComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductClassifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

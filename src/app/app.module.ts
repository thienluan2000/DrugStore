import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from 'src/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsContentComponent } from './products-content/products-content.component';

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
        ProductClassifyComponent,
        ProductDetailsComponent,
        ProductsContentComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPaginationModule,
        FormsModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule,
    ],
    providers: [
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImgLogoComponent } from './img-logo/img-logo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { SignUpBtnComponent } from './sign-up-btn/sign-up-btn.component';
import { CartBtnComponent } from './cart-btn/cart-btn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ImgBackgroundComponent } from './img-background/img-background.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgLogoComponent,
    SearchBarComponent,
    HeaderButtonComponent,
    LoginBtnComponent,
    SignUpBtnComponent,
    CartBtnComponent,
    NavbarComponent,
    MenuComponent,
    ImgBackgroundComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

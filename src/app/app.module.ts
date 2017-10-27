import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { TestComponent } from './app.test.component';
import { HomeComponent } from './app.home.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './app.notfound.component';
import { BlogSingleComponent } from './app.blog-single.component';
import { BlogComponent } from './app.blog.component';
import { CartComponent } from './app.cart.component';
import { CheckoutComponent } from './app.checkout.component';
import { ContactComponent } from './app.contact.component';
import { LoginComponent } from './app.login.component';
import { ShopComponent } from './app.shop.component';
import { ProductDetailsComponent } from './app.productdetails.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'blog/single', component: BlogSingleComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/details', component: ProductDetailsComponent },
  { path: 'shop', component: ShopComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    NotFoundComponent,
    BlogSingleComponent,
    BlogComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    LoginComponent,
    ProductDetailsComponent,
    ShopComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

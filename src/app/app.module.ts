import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './component/banner/banner.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';

import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ContentComponent } from './component/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';
import { ListComponent } from './admin/list/list.component';
import { ClientLayoutComponent } from '../app/layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { ListAccountComponent } from './account/list-account/list-account.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
  
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProductDetailComponent,
    ContentComponent,

    AddComponent,
    UpdateComponent,
    ListComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,

    ListAccountComponent,
     AddAccountComponent,
     UpdateAccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
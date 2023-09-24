import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component'; // Import thư viện ng-bootstrap


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
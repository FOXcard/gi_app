import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSuccessComponent } from './success/home-success/home-success.component';
import { HomeCardComponent } from './card/home-card/home-card.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeMobileSuccessComponent } from './success/home-mobile-success/home-mobile-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeSuccessComponent,
    HomeCardComponent,
    HomeComponent,
    ErrorPageComponent,
    HomeMobileSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

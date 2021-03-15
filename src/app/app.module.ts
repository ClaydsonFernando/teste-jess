import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { ListWeatherComponent } from "./weather/list-weather/list-weather.component";
import { SearchWeatherComponent } from "./weather/search-weather/search-weather.component";
import { HeaderComponent } from "./weather/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ListWeatherComponent,
    SearchWeatherComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

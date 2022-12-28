import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ AppComponent, AboutMeComponent, AddCarComponent, CarComponent, CarsComponent, HomeComponent, NotFoundComponent ],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

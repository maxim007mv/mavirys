import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'car/:id', component: CarComponent },
      { path: 'cars', component: CarsComponent },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'add/car', component: AddCarComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}



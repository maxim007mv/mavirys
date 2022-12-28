import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carlist:Car[] = []  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    const car1 :Car = { 
      brandName: "Mers",
      modelName: "gt 666",
      priceInRub: 228
    }
    const car2 :Car = { 
      brandName: "Mers",
      modelName: "gtr 373",
      priceInRub: 228
    }
    const car3 :Car = { 
      brandName: "bmw",
      modelName: "x7",
      priceInRub: 228
    }
    this.carService.addCar(car1);
    this.carService.addCar(car2);
    this.carService.addCar(car3);

    this.carlist = this.carService.getCars();

  }

}

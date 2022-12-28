import { Injectable } from '@angular/core';

export interface Car {
  id?: number;
  brandName: string;
  modelName: string;
  priceInRub: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[]=[];

  constructor() { }

  getCars(){
    return this.cars;
  }
  addCar(car: Car){
    const carsLen = this.cars.length;
    this.cars.push({
      ...car,
      id: carsLen+1
    })
  }
  getCar(id: number){
    return this.cars.find(car => car.id === id);
  }

}

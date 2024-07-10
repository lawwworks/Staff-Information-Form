import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getEmployeeDetails() {
    return [
      { name: 'Falano', address: 'Newroad', age: 19, phone: 98239128373 },
      { name: 'Falano2', address: 'Newroad2', age: 20, phone: 98087394872 },
      { name: 'Falano3', address: 'Newroad3', age: 21, phone: 91937367183 },
    ];
  }
}

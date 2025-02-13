import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // Override Symbol.species so cloning returns Car instead of EVCar
  static get [Symbol.species]() {
    return Car; // Ensure `cloneCar()` returns a `Car` instance
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species]; // Uses EVCar[Symbol.species]
    return new Species(this.brand, this.motor, this.color);
  }
}

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

  // Override Symbol.species to ensure cloning returns EVCar instead of Car
  static get [Symbol.species]() {
    return this; // Ensures cloning returns EVCar instances
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species]; // Ensures it uses EVCar[Symbol.species]
    return new Species(this.brand, this.motor, this.color, this.range);
  }
}

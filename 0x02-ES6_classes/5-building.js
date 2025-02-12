export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }
    this._sqft = sqft;
  }

  set sqftq(v) {
    this._sqft = v;
  }

  get sqftq() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

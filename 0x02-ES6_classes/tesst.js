export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    try{
      this.evacuationWarningMessage()
    }
    catch{
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }

  set sqftq(v) {
    this._sqft = v;
  }

  get sqftq() {
    return this._sqft;
  }

}

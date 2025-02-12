import Building from './5-building.js';

export default class test extends Building {
  constructor(id, username, sqft) {
    super(sqft);
    this._id = id;
    this._username = username;
  }

  set id(v) {
    this._id = v;
  }

  get id() {
    return this._id;
  }

  set username(v) {
    this._username = v;
  }

  get username() {
    return this._username;
  }
}

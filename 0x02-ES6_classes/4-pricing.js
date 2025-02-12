import ClassRoom from './3-currency';

export default class Currency {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(v) {
    this._amount = v;
  }

  set currency(v) {
    this._currency = v;
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

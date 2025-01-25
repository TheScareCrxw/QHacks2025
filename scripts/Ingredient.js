export default class Ingredient {
  constructor(name, quantity, unit) {
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
  }

  getName() {
    return this.name;
  }

  getQuantity() {
    return this.quantity;
  }

  getUnit() {
    return this.unit;
  }

  toString() {
    return `${this.quantity} ${this.unit} ${this.name}`;
  }
}

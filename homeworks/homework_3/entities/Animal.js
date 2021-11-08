import { IncorrectPropertyError } from '../errors/IncorrectPropertyError.js';
import { IsNotNumberError } from '../errors/IsNotNumberError.js';

export class Animal {

  constructor() {
    this._type = null;
    this._color = null;
    this._weight = null;
    this._height = null;
    this._placeOfOrigin = null;
  }

  getInfo(info) {
    try {
      if (!Object.keys(this).includes(`_${info}`)) {
        throw new IncorrectPropertyError(`"${info}"`);
      }
      return this[`_${info}`];
    } catch (err) {
      console.log(err);
    }
  }

  setWeight(weight) {
    try {
      if (typeof weight !== 'number' || !isFinite(weight)) {
        throw new IsNotNumberError('Weight');
      }
      this._weight = weight;
    } catch (err) {
      console.log(err);
    }
  }

  setHeight(height) {
    try {
      if (typeof height !== 'number' || !isFinite(height)) {
        throw new IsNotNumberError('Height');
      }
      this._height = height;
    } catch (err) {
      console.log(err);
    }
  }

}

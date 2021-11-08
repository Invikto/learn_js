import { IsNotStringError } from '../errors/IsNotStringError.js';

export class Worker {

  constructor() {
    this._firstName = null;
    this._lastName = null;
    this._phone = null;
  }

  getInfo(info) {
    return this['_' + info];
  }

  setFirstName(firstName) {
    try {
      if (typeof firstName !== 'string') {
        throw new IsNotStringError('First name');
      }
      this._firstName = firstName;
    } catch (err) {
      console.log(err);
    }
  }

  setLastName(lastName) {
    try {
      if (typeof lastName !== 'string') {
        throw new IsNotStringError('Last name');
      }
      this._lastName = lastName;
    } catch (err) {
      console.log(err);
    }
  }

  setPhone(phone) {
    try {
      if (typeof phone !== 'string' && !Number.isInteger(phone)) {
        throw new IsNotStringError('Phone');
      }
      this._phone = phone.toString();
    } catch (err) {
      console.log(err);
    }
  }

}

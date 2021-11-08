import { Animal } from './Animal.js';

import { IsNotBooleanError } from '../errors/IsNotBooleanError.js';

export class Snake extends Animal {

  constructor() {
    super();
    this._isPoisonous = null;
  }

  setPoisonous(isPoisonous) {
    try {
      if (typeof isPoisonous !== 'boolean') {
        throw new IsNotBooleanError ('"isPoisonous"');
      }
      this._isPoisonous = isPoisonous;
    } catch (err) {
      console.log(err);
    }
  }

}

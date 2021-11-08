import { Animal } from "./Animal";

import { IsNotBooleanError } from "../errors/IsNotBooleanError";

class Bird extends Animal {

  constructor() {
    super();
    this._isFlying = null;
  }

  setSafety(isFlying) {
    try {
      if (typeof isFlying !== 'boolean') {
        throw new IsNotBooleanError('"isFlying"');
      }
      this._isFlying = isFlying;
    } catch (err) {
      console.log(err);
    }
  }

}

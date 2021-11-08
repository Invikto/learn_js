import { Animal } from "./Animal";

import { IsNotBooleanError } from "../errors/IsNotBooleanError";

class CatLike extends Animal {

  constructor() {
    super();
    this._isSafeToPet = null;
  }

  setSafety(isSafeToPet) {
    try {
      if (typeof isSafeToPet !== 'boolean') {
        throw new IsNotBooleanError('"isSafeToPet"');
      }
      this._isSafeToPet = isSafeToPet;
    } catch (err) {
      console.log(err);
    }
  }

}

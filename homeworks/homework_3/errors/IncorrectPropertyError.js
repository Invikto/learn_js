export class IncorrectPropertyError extends Error {
  
  constructor(element) {
    super();
    this.message = `Class doesn't contain the ${element} property`;
  }

}

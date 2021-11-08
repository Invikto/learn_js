export class IsNotStringError extends TypeError {
  
  constructor(element) {
    super();
    this.message = `${element} must be a string`;
  }

}

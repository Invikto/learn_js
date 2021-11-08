export class IsNotNumberError extends TypeError {
  
  constructor(element) {
    super();
    this.message = `${element} must be a number`;
  }

}

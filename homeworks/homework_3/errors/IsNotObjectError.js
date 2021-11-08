export class IsNotObjectError extends TypeError {
  
  constructor(element) {
    super();
    this.message = `${element} must be an object`;
  }

}

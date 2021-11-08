export class IsNotInstanceError extends TypeError {
  
  constructor(element) {
    super();
    this.message = `${element} must be an instance of the correspond class`;
  }

}

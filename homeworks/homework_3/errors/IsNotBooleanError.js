export class IsNotBooleanError extends TypeError {
  
  constructor(element) {
    super();
    this.message = `${element} must be a boolean`;
  }

}

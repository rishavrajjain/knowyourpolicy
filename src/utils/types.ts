export class CustomError extends Error {
  code: number;
  constructor(code: number, message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.code = code;
  }
}

export class Foo {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  bar() {
    return this.message;
  }
}

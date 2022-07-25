import { Foo } from "../lib";

describe("Foo", () => {
  it("should say 'hello world'", () => {
    const foo = new Foo("hello world");
    expect(foo.bar()).toEqual("hello world");
  });
});

import { expect, it } from "vitest";
import { hello } from "../src";

it("expect return value to be 'Hello, world!'", () => {
  expect(hello()).toEqual("Hello, world!");
});

// sum.test.js
import { expect, test, it } from "vitest";

function sum(a: number, b: number) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
//   it("Sum Logic", () => {
    expect(sum(1, 2)).toBe(3);
//   });
});

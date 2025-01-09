// sum.test.js
import { expect, test } from "vitest";

function sum(a: number, b: number) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
    const restult = sum(1, 2)
    expect(restult).toMatchSnapshot()
});
import countBy from "../src/countBy.js";
import { expect } from "chai";

const products = [
  { name: "a", category: 1 },
  { name: "b", category: 2 },
  { name: "b", category: 2 },
  { name: "c", category: 2 },
];

// These are pre-planned tests for the countBy function
describe("countBy.pre-plan()", () => {
  it("Should count by property", () => {
    expect(countBy(products, (x) => x.name)).to.deep.equal({
      a: 1,
      b: 2,
      c: 1,
    });
  });

  it("Should count by property", () => {
    expect(countBy(products, (x) => x.category)).to.deep.equal({ 1: 1, 2: 3 });
  });

  it("Should throw with property that does not exist", () => {
    expect(countBy(products, (x) => x.product)).to.Throw;
  });

  // it("Should throw with invalid input", () => {
  //   expect(countBy(products, undefined)).to.Throw;
  // });

  it("Should throw with invalid input", () => {
    expect(countBy(undefined, (x) => x.name)).to.Throw;
  });

  it("Should fail with empty list", () => {
    expect(countBy([], (x) => x.name)).to.Throw;
  });
});

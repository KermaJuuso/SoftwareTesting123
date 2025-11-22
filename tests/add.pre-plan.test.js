import add from "../src/add.js";
import { expect } from "chai";

// These are pre-planned tests for the add function
describe("add.pre-plan()", () => {
  it("Should sum two positive numbers", () => {
    expect(add(5, 3)).to.equal(8);
  });

  it("Should sum positive and negative numbers", () => {
    expect(add(5, -3)).to.equal(2);
  });

  it("Should throw with invalid input type", () => {
    expect(add("5", 3)).to.Throw;
  });

  it("Should sum with decimal", () => {
    expect(add(5, 3.1)).to.equal(8.1);
  });

  it("Should throw with invalid input", () => {
    expect(add(undefined, 1)).to.Throw;
  });

  it("Should throw with invalid input", () => {
    expect(add(null)).to.Throw;
  });
});

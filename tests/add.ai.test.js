import { expect } from "chai";
import add from "../src/add.js";

// These are AI-assisted tests for the add function
describe("add.ai()", () => {
  it("adds two numbers", () => {
    expect(add(6, 4)).to.equal(10);
    expect(add(-3, 7)).to.equal(4);
  });

  it("returns 0 when both arguments are undefined", () => {
    expect(add(undefined, undefined)).to.equal(0);
  });

  it("returns value when other is undefined", () => {
    expect(add(5, undefined)).to.equal(5);
  });

  it("returns other when value is undefined", () => {
    expect(add(undefined, 8)).to.equal(8);
  });

  it("adds string numbers (converted via baseToString)", () => {
    expect(add("3", "4")).to.equal("34"); // string + string → concatenation
  });

  it("adds mixed string + number (converted to string)", () => {
    expect(add("5", 6)).to.equal("56"); // string + number → both converted to string
    expect(add(5, "6")).to.equal("56");
  });

  it("adds non-string values using numeric conversion", () => {
    expect(add(true, 2)).to.equal(3); // true → 1
    expect(add(null, 2)).to.equal(2); // null → 0
  });

  it("handles NaN inputs", () => {
    expect(isNaN(add(NaN, 5))).to.be.true;
    expect(isNaN(add(3, NaN))).to.be.true;
  });

  it("works with floating point numbers", () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
  });
});

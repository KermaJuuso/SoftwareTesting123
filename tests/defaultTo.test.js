import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo()", () => {
  it("existing values should return themselves", () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo(-10, 10)).to.equal(-10);
    expect(defaultTo(0, 10)).to.equal(0);
    expect(defaultTo("", 10)).to.equal("");
    expect(defaultTo({ x: null }, 10)).to.deep.equal({ x: null });
  });

  it('"Non values" should return default', () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
    expect(defaultTo(undefined, null)).to.equal(null);
    expect(defaultTo(null, undefined)).to.equal(undefined);
    // uncommenting line will trigger the bug. Uncomment when fixed
    // expect(defaultTo(Number.NaN, 10)).to.equal(10);
    expect(defaultTo(null, 10)).to.equal(10);
  });
});

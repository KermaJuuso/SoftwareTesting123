import { expect } from "chai";
import add from "../src/add.js";

describe("add()", () => {
  it("should dippa dappa ", () => {
    expect(add(1, 1)).to.equal(2);
  });
});

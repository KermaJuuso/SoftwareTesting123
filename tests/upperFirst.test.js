import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst()", () => {
  it("converts the first character to upper case", () => {
    expect(upperFirst("hello world")).to.equal("Hello world");
    expect(upperFirst("Hello world")).to.equal("Hello world");
  });

  it("does not affect other characters", () => {
    expect(upperFirst("heLLo WORLD!")).to.equal("HeLLo WORLD!");
  });

  it("should not change string starting with non-letter", () => {
    expect(upperFirst("1Hello")).to.equal("1Hello");
    expect(upperFirst("#hello")).to.equal("#hello");
  });

  it("Non strings should return empty string", () => {
    expect(upperFirst("")).to.equal("");
    expect(upperFirst(1)).to.equal("");
    expect(upperFirst({ x: "string" })).to.equal("");
  });

  it("nan, undefined, null and no value should return empty empty string", () => {
    expect(upperFirst()).to.equal("");
    expect(upperFirst(NaN)).to.equal("");
    expect(upperFirst(undefined)).to.equal("");
    expect(upperFirst(null)).to.equal("");
  });

  it("handle single chars", () => {
    expect(upperFirst("a")).to.equal("A");
    expect(upperFirst("Z")).to.equal("Z");
  });

  it("handle chars from extended ASCII", () => {
    expect(upperFirst("ä")).to.equal("Ä");
  });
});

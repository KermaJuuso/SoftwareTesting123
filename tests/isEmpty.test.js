import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty()", () => {

  it("should return true for an empty string", () => {
    expect(isEmpty("")).to.be.true;
  });

  it("should return false for a non-empty string", () => {
    expect(isEmpty("gpu")).to.be.false;
  });


  it("should return true for an empty object", () => {
    expect(isEmpty({})).to.be.true;
  });

  it("should return false for a non-empty object", () => {
    const product = {
      name: "GPU 4K",
      price: 199.99,
      category: "Components"
    };
    expect(isEmpty(product)).to.be.false;
  });


  it("should return true for an empty array", () => {
    const cart = [];
    expect(isEmpty(cart)).to.be.true;
  });

  it("should return false for a non-empty array", () => {
    const cart = [{ name: "Banana", price: 0.99 }];
    expect(isEmpty(cart)).to.be.false;
  });

  it("should return true for null", () => {
    expect(isEmpty(null)).to.be.true;
  });

});

import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq()", () => {
    const object1 = {'id': 123,
                    'name': 'GPU 4K',
                    'category': 'Component',
                    'price': '199.99'};
    const diffObject = {'id': 987,
                    'name': 'Banana',
                    'category': 'food',
                    'price': '0.99'};
    //Object 3 identical to object 1
    const objectSameValues = {'id': 123,
                    'name': 'GPU 4K',
                    'category': 'Component',
                    'price': '199.99'};
    const alias = object1;

  it("Same object returns true", () => {
    expect(eq(object1, object1)).to.be.true;
  });

  it("Different objects return false", () => {
    expect(eq(object1, diffObject)).to.be.false;
  });

  it("Alias reference returns true", () => {
    expect(eq(object1, alias)).to.be.true;
  });

  it("Return false for objects with same values but different references", () => {
    expect(eq(object1, objectSameValues)).to.be.false;
  });

  it("Equal strings return true", () => {
    expect(eq("NaN", "NaN")).to.be.true;
  });

  it("NaN and NaN return true", () => {
    expect(eq(NaN, NaN)).to.be.true;
  });

  it("String compared to float returns true", () => {
    expect(eq(object1.price, 199.99)).to.be.true;
  });
      
});
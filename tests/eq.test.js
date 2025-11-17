import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq()", () => {
    const object1 = {'id': 123,
                    'name': 'GPU 4K',
                    'category': 'Component',
                    'price': '199.99'};
    const object2 = {'id': 987,
                    'name': 'Banana',
                    'category': 'food',
                    'price': '0.99'};
    //Object 3 identical to object 1
    const object3 = {'id': 123,
                    'name': 'GPU 4K',
                    'category': 'Component',
                    'price': '199.99'};
    const copyObject = object1;

  it("Identical objects should be equal", () => {
    expect(eq(object1, object1)).to.be.true;
  });

  it("Different objects should not be equal", () => {
    expect(eq(object1, object2)).to.be.false;
  });

  it("Copied object should be equal", () => {
    expect(eq(object1, copyObject)).to.be.true;
  });

  it("Objects with exact same values should not be equal", () => {
    expect(eq(object1, object3)).to.be.false;
  });
      
});
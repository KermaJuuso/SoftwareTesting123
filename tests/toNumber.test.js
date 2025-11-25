import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("toNumber()", () => {

  // -------- Numbers ---------
  it("should convert 'number' to number", () => {
    expect(toNumber('5')).to.equal(5);
  });

  it("number should be number", () => {
    expect(toNumber(10)).to.equal(10);
  });

  it("float (3.2) should be 3.2", () => {
    expect(toNumber(3.2)).to.equal(3.2);
  });

  it("string float ('3.2') should be 3.2", () => {
    expect(toNumber('3.2')).to.equal(3.2);
  });  

  it("negative number should be the same", () => {
    expect(toNumber(-123)).to.equal(-123);
  }); 

  it("negative string number should be number", () => {
    expect(toNumber('-123')).to.equal(-123);
  }); 

  it("number with spaces should be the number only", () => {
    expect(toNumber('  123  ')).to.equal(123);
  }); 

  it("Infinity should equal to infinity", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });

  it("Zero should equal to zero", () => {
    expect(toNumber(0)).to.equal(0);
  });

  it("- zero should equal to - zero", () => {
    expect(toNumber(-0)).to.equal(-0);
  });


  // -------- strings ----------
  it("Empty string should be 0", () => {
    expect(toNumber("")).to.equal(0);
  }); 

  it("String with spaces only should be 0", () => {
    expect(toNumber(" ")).to.equal(0);
  }); 

  it("String should be NaN", () => {
    expect(toNumber("hello world!")).to.be.NaN;
  }); 

  // ------ other stuff -------
  it("symbol should be NaN", () => {
    expect(toNumber(Symbol("foo"))).to.be.NaN;
  });

  it("true should be 1", () => {
    expect(toNumber(true)).to.equal(1);
  });

  it("false should be 0", () => {
    expect(toNumber(false)).to.equal(0);
  });

  it("null should be 0", () => {
    expect(toNumber(null)).to.equal(0);
  });

  it("undefined should be NaN", () => {
    expect(toNumber(undefined)).to.be.NaN;
  });

  it("hexadecimals should convert to numbers", () => {
    expect(toNumber(0xf123)).to.equal(61731);
  });

  it("String hexadecimals should convert to numbers", () => {
    expect(toNumber('0xf123')).to.equal(61731);
  });

  it("Bad hexadecimals should be NaN", () => {
    expect(toNumber('0xfz')).to.be.NaN;
  });

  // ----- arrays ------
  it("Empty array should be 0", () => {
    expect(toNumber([])).to.equal(0);
  });
  it("Array with one value should be the value", () => {
    expect(toNumber([88])).to.equal(88);
  });
  it("Array with one string value should be the value", () => {
    expect(toNumber(['88'])).to.equal(88);
  });
  it("Array with two values should be the NaN", () => {
    expect(toNumber([8, 8])).to.be.NaN;
  });

  it("Array with two string values should be the NaN", () => {
    expect(toNumber(['8', '8'])).to.be.NaN;
  });

  // --- objects ---
  it("Plain object should be NaN", () => {
    expect(toNumber({})).to.be.NaN;
  });

  it("Object with no valueof() should be NaN", () => {
    const product = {
        name: "Car",
        category: "automobiles",
        price: 1000.00
    }
    expect(toNumber(product)).to.be.NaN;
  });

  it("Object with valueof() should be the value", () => {
    const product = {
        name: "Car",
        category: "automobiles",
        price: 1000.00,
        valueOf() {return this.price}
    }
    expect(toNumber(product)).to.equal(1000.00);
  });
  
});
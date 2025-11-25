import { AssertionError, expect } from "chai";
import filter from "../src/filter.js";

describe("filter()", () => {
  const testProducts = {
    product1: {
      name: "Thinkpad",
      category: ["Laptop", "Computer", "Intel", "School", "Electronics"],
      price: 499.99,
      components: ["GPU", "CPU", "RAM"],
    },
    product2: {
      name: "iPhone 14",
      category: ["Smartphone", "Mobile", "Apple", "Electronics"],
      price: 999.99,
      components: ["Camera", "CPU", "Battery"],
    },
    product3: {
      name: "Dell Monitor",
      category: ["Monitor", "Computer", "Display", "Electronics"],
      price: 199.99,
      components: ["Screen", "Stand", "Cable"],
    },
    product4: {
      name: undefined,
      category: [undefined],
      price: NaN,
      components: undefined,
    },
  };

  const productsArray = Object.values(testProducts);

  // Example test case provided by M365 Copilot
  it("should return products priced above $500", () => {
    const result = filter(productsArray, (product) => product.price > 500);
    expect(result).to.be.an("array").that.has.lengthOf(1);
    expect(result[0]).to.have.property("name", "iPhone 14");
  });

  it("should return all products with x category name", () => {
    const result = filter(productsArray, (product) =>
      product.category.includes("Electronics")
    );
    expect(result).to.be.an("array").that.has.lengthOf(3);
  });

  it("should return an empty array", () => {
    const result = filter(productsArray, (product) =>
      product.category.includes("ASDSA")
    );
    expect(result).to.be.an("array").that.has.lengthOf(0);
  });

  it("null as input should return an empty array", () => {
    const result = filter(null, (product) =>
      product.category.includes("ASDSA")
    );
    expect(result).to.be.an("array").that.has.lengthOf(0);
  });

  it("undefined as input should return an empty array", () => {
    const result = filter(undefined, (product) =>
      product.category.includes("ASDSA")
    );
    expect(result).to.be.an("array").that.has.lengthOf(0);
  });

  it("String as value should return TypeError", () => {
    const text = "THIS IS EPIC";
    expect(() =>
      filter(text, (product) => product.category.includes("ASDSA"))
    ).to.throw(TypeError);
  });

  it("Number as value should return empty array", () => {
    const result = filter(12, (num) => num);
    expect(result).to.be.an("array").that.has.lengthOf(0);
  });

  it("Object as value should return an empty array", () => {
    const result = filter(testProducts, (product) => product.price > 500);
    expect(result).to.be.an("array").that.has.lengthOf(0);
  });

  it("With no predicate should return TypeError", () => {
    expect(() => filter(productsArray)).to.throw(TypeError);
    expect(() => filter(productsArray, null)).to.throw(TypeError);
    expect(() => filter(productsArray, undefined)).to.throw(TypeError);
    expect(() => filter(productsArray, "Not function")).to.throw(TypeError);
  });

  // Edge.
  it("Empty array should return an empty array", () => {
    const products = [];
    const result = filter(products, (product) => product);
    expect(result).to.be.an("array").that.has.lengthOf(0);
  });

  it("Product with undefined name should throw typeError", () => {
    expect(() =>
      filter(productsArray, (product) => product.name.includes("Think"))
    ).to.throw(TypeError);
  });

  it("Number as value should return empty array", () => {
    const result = filter(productsArray, ({ category }) =>
      category.includes("Computer")
    );
    expect(result).to.deep.equal([
      testProducts.product1,
      testProducts.product3,
    ]);
  });
});

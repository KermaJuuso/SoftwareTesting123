import { expect } from "chai";
import at from "../src/at.js";

describe("at()", () => {

    it("Basic test", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3, 4])
    });

    const product = {
        id: 101,
        name: "Gaming Laptop",
        specs: {
            cpu: "Intel i7",
            gpu: "NVIDIA RTX 3060",
            memory: { ram: "16GB", storage: "512GB SSD" }
        },
        price: 1299.99,
        tags: ["Electronics", "Laptop", "Gaming"]
    };

    it("Simple test 1", () => {
        expect(at(product, ['name'])).to.deep.equal(["Gaming Laptop"]);
    });

    it("Simple test 2", () => {
        expect(at(product, ['specs'])).to.deep.equal([product.specs]);
    });

    it("Simple test 3", () => {
        expect(at(product, ['specs.memory.storage', 'tags[0]'])).to.deep.equal(["512GB SSD", "Electronics"]);
    });

    it("Incorrect path should be array with undefined", () => {
        expect(at(product, ['specs.storage'])).to.deep.equal([undefined]);
    });

    it("Non-existing path should be array with undefined", () => {
        expect(at(product, ['WRONG'])).to.deep.equal([undefined]);
    });

    it("Path not in quotes should be reference error", () => {
        expect(() => at(product, [id])).to.throw(ReferenceError);
    });

    it("Path not in array should work", () => {
        expect(at(product, 'id')).to.deep.equal([101]);
    });

    it("Multiple path strings", () => {
        expect(at(product, 'name', 'specs.cpu', 'price')).to.deep.equal(["Gaming Laptop", "Intel i7", 1299.99]);
    });
    
});
import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter()", () => {
    const testProducts = {
        product1: {
            name: "Thinkpad",
            category: ["Laptop", "Computer", "Intel", "School", "Electronics"],
            price: 499.99,
            components: ["GPU", "CPU", "RAM"]
        },
        product2: {
            name: "iPhone 14",
            category: ["Smartphone", "Mobile", "Apple", "Electronics"],
            price: 999.99,
            components: ["Camera", "CPU", "Battery"]
        },
        product3: {
            name: "Dell Monitor",
            category: ["Monitor", "Computer", "Display", "Electronics"],
            price: 199.99,
            components: ["Screen", "Stand", "Cable"]
        }
    };

    // Example test case provided by M365 Copilot
    it('should return products priced above $500', () => {
        const productsArray = Object.values(testProducts);
        const result = filter(productsArray, product => product.price > 500);
        expect(result).to.be.an('array').that.has.lengthOf(1);
        expect(result[0]).to.have.property('name', 'iPhone 14');
    });

    it('should return all products with x category name', () => {
        const productsArray = Object.values(testProducts);
        const result = filter(productsArray, product => product.category.includes("Electronics"));
        console.log(result);
        expect(result).to.be.an('array').that.has.lengthOf(3);
        //expect(result[0]).to.have.property('name', 'Thinkpad');
    });


});
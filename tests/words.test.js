import { expect } from "chai";
import words from "../src/words.js";

describe("words()", () => {

    it("String of lowercase words with default pattern", () => {
        expect(words("yellow iphone case")).to.be.an("array").that.has.lengthOf(3);
    });

    it("string with words and symbols with default pattern should return the words", () => {
        expect(words("yellow @iphone && case")).to.be.an("array").that.has.lengthOf(3);
    });

    it("String with words without spaces but with Uppercase first letters", () => {
        expect(words("CarWithBlueWheels")).to.be.an("array").that.has.lengthOf(4);
    });

    it("Default pattern 'iPhone' => 'i', 'Phone' ", () => {
        expect(words("iPhone")).to.be.an("array").that.has.lengthOf(2);
    });

    it("Korean", () => {
        expect(words("안녕하세요 세상")).to.be.an("array").that.has.lengthOf(2);
    });

    it("'GeForce 3060Ti Ultra' should be separated into 5 with default pattern", () => {
        expect(words("GeForce 3060Ti Ultra")).to.be.an("array").that.has.lengthOf(5);
    });


    it("Simple string of words with string as pattern", () => {
        expect(words("my car is not cool", "car is")).to.be.an("array").that.has.lengthOf(1);
    });

    it("Simple string of words with letter as pattern", () => {
        expect(words("my car is not cool", "o")).to.be.an("array").that.has.lengthOf(1);
    });

    it("String and custom regex as pattern", () => {
        expect(words("@store, location, 50%, sale, !", /[^, ]+/g)).to.be.an("array").that.has.lengthOf(5);
    });


    it("Pattern with uppercase should not find a match", () => {
        expect(words("red apple", "Red")).to.be.an("array").that.has.lengthOf(0);
    });

    it("Pattern with no matches should return empty array", () => {
        expect(words("red apple", "car")).to.be.an("array").that.has.lengthOf(0);
    });

    it("Integer as pattern works", () => {
        expect(words("GeForce 3060Ti Ultra", 3060)).to.be.an("array").that.has.lengthOf(1);
    });

    it("Non-string as pattern should be RefereceError", () => {
        expect(() => words("GeForce 3060Ti Ultra", ultra)).to.throw(ReferenceError);
    });

    it("Broken regex should return 0 len array", () => {
        expect(words("café latte super drink", /\]/g)).to.be.an("array").that.has.lengthOf(0);
    });

    it("Empty string should return 0 len array", () => {
        expect(words("")).to.be.an("array").that.has.lengthOf(0);
    });
});





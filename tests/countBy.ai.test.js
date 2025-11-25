import countBy from "../src/countBy.js";
import { expect } from "chai";

// These are AI-assisted tests for the countBy function
describe("countBy.ai()", () => {
  it("counts boolean keys from an array of objects", () => {
    const users = [
      { user: "barney", active: true },
      { user: "betty", active: true },
      { user: "fred", active: false },
    ];

    const result = countBy(users, (v) => v.active);

    expect(result).to.deep.equal({ true: 2, false: 1 });
  });

  it("counts numbers correctly", () => {
    const arr = [1, 2, 3, 4, 5, 6];

    const result = countBy(arr, (n) => n % 2);

    expect(result).to.deep.equal({ 0: 3, 1: 3 });
  });

  it("handles string values correctly", () => {
    const result = countBy(["a", "b", "a", "c"], (v) => v);

    expect(result).to.deep.equal({ a: 2, b: 1, c: 1 });
  });

  it("works with objects instead of arrays", () => {
    const input = { x: 1, y: 2, z: 1 };

    const result = countBy(input, (v) => v);

    expect(result).to.deep.equal({ 1: 2, 2: 1 });
  });

  it("initial key count starts at 1", () => {
    const result = countBy([42], () => "k");
    expect(result).to.deep.equal({ k: 1 });
  });

  it("iteratee is called once per item", () => {
    let calls = 0;
    const iteratee = (v) => {
      calls++;
      return v;
    };
    countBy([1, 2, 3], iteratee);
    expect(calls).to.equal(3);
  });

  it("does not modify original input", () => {
    const arr = [1, 1, 2];
    const snapshot = [...arr];
    countBy(arr, (x) => x);
    expect(arr).to.deep.equal(snapshot);
  });

  it("supports complex keys (objects → stringified)", () => {
    const a = {};
    const b = {};

    const result = countBy([a, b, a], (v) => v);

    // All objects stringify to "[object Object]"
    expect(result["[object Object]"]).to.deep.equal(3);
  });

  it('properly handles "__proto__" key using baseAssignValue', () => {
    const result = countBy(["__proto__", "__proto__"], (v) => v);

    // Should not pollute prototype
    expect({}.someInjectedProp).to.deep.equal(undefined);

    // Should be stored safely on object with correct count
    const desc = Object.getOwnPropertyDescriptor(result, "__proto__");
    expect(desc.value).to.deep.equal(2);
  });

  it("works with empty collections", () => {
    expect(countBy([], (v) => v)).to.deep.equal({});
    expect(countBy({}, (v) => v)).to.deep.equal({});
  });
});

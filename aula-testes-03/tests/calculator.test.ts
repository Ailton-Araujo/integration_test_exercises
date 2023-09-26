import calculator from "../src/calculator";

describe("Calculator Operations", () => {
  it("sum", () => {
    expect(calculator.sum(2, 1)).toBe(3);
  });
  it("sub", () => {
    expect(calculator.sub(1, 1)).toBe(0);
  });
  it("div", () => {
    expect(calculator.div(3, 3)).toBe(1);
  });
  it("multi", () => {
    expect(calculator.mul(2, 2)).toBe(4);
  });
});

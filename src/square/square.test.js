const square = require("./square");

describe("square", () => {
  test("square first", () => {
    expect(square(2)).toBe(4);
  });
  test("square first", () => {
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBe(3);
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });
  test("square first", () => {
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBe(3);
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toHaveBeenCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

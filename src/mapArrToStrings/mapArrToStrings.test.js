const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
  test("корректное значение", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("мешанина", () => {
    expect(mapArrToStrings([1, 2, 3, null, false])).toEqual(["1", "2", "3"]);
  });

  test("пустой", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
});

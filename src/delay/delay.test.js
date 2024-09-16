const delay = require("./delay");

describe("delay", () => {
  test("should delay  ", async () => {
    const sum = await delay(() => 5 + 5, 500);
    expect(sum).toEqual(10);
  });
});

const {
  formatAsPrice,
  formatDateAsString,
} = require("../../src/helpers/utils");

describe("Helpers - Unit", () => {
  describe("formatAsPrice", () => {
    it("should convert pennies into a dollar amount", () => {
      const dollars = formatAsPrice(10000);
      expect(dollars).toBe("$100.00");
    });
  });
});

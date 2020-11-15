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

  describe("formatDateAsString", () => {
    it("should convert date into YYYY-MM-DD format", () => {
      const date = formatDateAsString(new Date(2020, 1, 1));
      expect(date).toBe("2020-02-01"); // JS Month is 0 indexed. 1 is Feb
    });
  });
});

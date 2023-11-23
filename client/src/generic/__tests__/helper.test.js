import * as helper from "../helper";

describe("Helper methods", () => {
  describe("formattedDate", () => {
    const setMockLanguage = (language) =>
      Object.defineProperty(global.navigator, "language", {
        get: () => language,
        enumerable: true,
        configurable: true,
      });

    it("should return placeholder if incoming date is invalid", () => {
      expect(helper.formattedDate("some_string")).toBe("--");
    });

    it("should return parsed date in GB format, if incoming date is valid", () => {
      setMockLanguage("en-GB");

      expect(helper.formattedDate("2020-01-15T10:47:54Z")).toBe(
        "15/01/2020, 10:47"
      );
    });

    it("should return parsed date in US format, if incoming date is valid", () => {
      setMockLanguage("en-US");

      expect(helper.formattedDate("2020-01-15T10:47:54Z")).toBe(
        "1/15/2020, 10:47"
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });
});

const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  //MenuController is passed as name of the test suite
  beforeEach(() => {
    this.menu = new MenuController();
  });
  describe("#getContactCount()", () => {
    it("should return 0 when no contacts are in the book", () => {
      //function implementing the specs
      expect(this.menu.getContactCount()).toBe(0); //toBe is a matcher in Jasmine
    });
    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.book.addContact("Bob", "555-555-5555");
      expect(this.menu.getContactCount()).toBe(1);
    });
  });
});

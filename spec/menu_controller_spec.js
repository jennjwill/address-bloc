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
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1);
    });
  });
  describe("#remindMe()", () => {
    it("should return 'Learning is a life-long pursuit", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });
  });
});

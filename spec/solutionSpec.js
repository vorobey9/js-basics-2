var isEven = require('../solution').isEven,
  pascal = require('../solution').pascal,
  sqrt = require('../solution').sqrt;

describe("solution", function() {
  describe("isEven", function() {
    it("works with even numbers", function() {
      expect(isEven(0)).toBe(true);
      expect(isEven(2)).toBe(true);
      expect(isEven(42)).toBe(true);
    });

    it("works with odd numbers", function() {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(21)).toBe(false);
    });

    it("works for negative numbers", function() {
      expect(isEven(-21)).toBe(false);
      expect(isEven(-42)).toBe(true);
    });
  });

  describe("pascal", function() {
    it("returns undefined if row < col", function() {
      expect(pascal(0, 2)).toBeUndefined();
    });

    it("returns 1 for (0, 0)", function() {
      expect(pascal(0, 0)).toEqual(1);
    });

    it("returns 1 for (1, 1)", function() {
      expect(pascal(1, 1)).toEqual(1);
    });

    it("returns 1 for (1, 0)", function() {
      expect(pascal(1, 0)).toEqual(1);
    });

    it("returns 2 for (2, 1)", function() {
      expect(pascal(2, 1)).toEqual(2);
    });

    it("returns 6 for (4, 2)", function() {
      expect(pascal(4, 2)).toEqual(6);
    });
  });

  describe("sqrt", function() {
    beforeEach(function() {
      spyOn(Math, 'sqrt');
    });

    it("works for regular numbers", function() {
      expect(sqrt(9)).toBeCloseTo(3);
      expect(Math.sqrt).not.toHaveBeenCalled();
    });

    it("works for large numbers", function() {
      expect(sqrt(1000000000000000000)).toBeCloseTo(1000000000);
      expect(Math.sqrt).not.toHaveBeenCalled();
    });

    it("works for small numbers", function() {
      expect(sqrt(0.00000000000000000009)).toBeCloseTo(.0000000003);
      expect(Math.sqrt).not.toHaveBeenCalled();
    });
  });
});

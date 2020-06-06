const { add, minus, multiply, divide, power } = require("../util/util");

// describe f(n) is built into jest.
describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });

  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => add("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => add(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return the first argument minus the second", () => {
      expect(minus(4, 2)).toBe(2);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => minus("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => minus()).toThrowError();
    });
  });
});

describe("Multiply", () => {
  describe("Success", () => {
    it("Should return the first argument minus the second", () => {
      expect(multiply(4, 2)).toBe(8);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => multiply("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => multiply(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => multiply()).toThrowError();
    });
  });
});

describe("Divide", () => {
  describe("Success", () => {
    it("Should return the first argument minus the second", () => {
      expect(divide(4, 2)).toBe(2);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => divide("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => divide(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => divide()).toThrowError();
    });
  });
});

describe("Power", () => {
  describe("Success", () => {
    it("Should return the first argument minus the second", () => {
      expect(power(4, 2)).toBe(16);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => power("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => power(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => power()).toThrowError();
    });
  });
});

describe('app', () => {
  describe('calcController', () => {

    beforeEach(module('app'));

    var calcController;
    beforeEach(() => {
      inject(($controller) => {
        calcController = $controller('calcController');
      });
    });

    it("should have two numbers", () => {
      expect( calcController.number1 ).toBeDefined();
      expect( calcController.number2 ).toBeDefined();
    });

    it("should be able to add two numbers", () => {
      expect(calcController.add(4,5)).toBe(9);
    })

    it("should be able to subtract two numbers", () => {
      expect(calcController.sub(4,5)).toBe(-1);
    })

    it("should be able to divide two numbers", () => {
      expect(calcController.div(12,3)).toBe(4);
    })

    it("should be able to ceil a number", () => {
      expect(calcController.ceiling(13.2)).toBe(14);
    });

    it("should be able to floor a number", () => {
      expect(calcController.floor(13.2)).toBe(13);
    });

    it("should be able to ceil a number", () => {
      expect(calcController.ceiling(13.2)).toBe(14);
    });

    it("should be able to round a number", () => {
      expect(calcController.round(13.2)).toBe(13);
    });
  })
});

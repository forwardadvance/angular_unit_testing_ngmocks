describe('app', () => {
  describe('calcController', () => {
    var calcController;
    beforeEach(() => {
      calcController = new app.CalcController()
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

  })
});

describe('app', () => {
  describe('liftController', () => {
    beforeEach(module('app'));

    var liftController;;
    beforeEach(inject(function($controller){
      liftController = $controller('liftController')
    }));

    it("should have a floor", () => {
      expect( liftController.floor ).toBeDefined();
    });

    it("can go up", () => {
      var initialValue = liftController.floor;
      liftController.goUp();
      expect( liftController.floor ).toBe( initialValue + 1 );
    });

    it("can go down", () => {
      var initialValue = liftController.floor;
      liftController.goDown();
      expect( liftController.floor ).toBe( initialValue - 1 );
    })

  })
});

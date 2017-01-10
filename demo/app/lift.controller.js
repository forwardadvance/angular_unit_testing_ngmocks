angular.module('app')
  .controller('liftController', function() {
    this.floor = 0;
    this.goUp = () => {
      this.floor ++;
    }
    this.goDown = () => {
      this.floor --;
    }
  });

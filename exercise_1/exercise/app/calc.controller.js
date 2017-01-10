

angular.module('app')
  .controller('calcController', function() {
      this.add = (num1, num2) => {
        return num1 + num2;
      }
    });

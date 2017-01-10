angular.module('app', [])
  .controller('calcController', function() {
    this.number1 = this.number2 = 0;

    this.add = (num1, num2) => {
      return num1 + num2;
    }

    this.sub = (num1, num2) => {
      return num1 - num2;
    }

    this.div = (num1, num2) => {
      return num1 / num2;
    }

    this.ceiling = (num) => {
      return Math.ceil(num);
    }

    this.floor = (num) => {
      return Math.floor(num);
    }
    this.round = (num) => {
      return Math.round(num);
    }
  });

# Part 3 - ngMocks

*TL;DR; ngMocks is a library of helper methods that lets you gain access to the internals of a running app for the purposes of unit testing. It also mocks out the Angular AJAX backend.*

Angular Mocks is a library that lets you tear open a running Angular app and gain access to all the wriggly Angulary bits inside. You can give it an app, and get the controllers, factories, filters, etc.

It gives us two main functions. The `module()` function allows us to instantiate an Angular module. The `inject()` function that gives us direct access to the Angular dependency injector (DI).

It also takes all the live AJAX stuff and replaces it with mock AJAX, so you can test in safety.

## Pulling out a controller

Say we have an app like this:

```
angular.module('app', [])
  .controller('liftController', function() {
    this.floor = 0;
    this.goUp = () => {
      this.floor ++;
    }
    this.goDown = () => {
      this.floor --;
    }
  });
```

This is a turbolift controller, suitable for Federation starships and large office buildings.

Notice that our controller constructor function is not in a separate variable. We're passing it directly into Angular. We need some way of getting it back out again.

We normally do this using the $controller service:

```
var liftController = $controller('liftController');
```

But now we have another problem: how to gain access to the $controller service. It's an injectable service, so we get it with Dependency Injection. ngMocks gives us the inject function to help with this:

```
var liftController
inject(($controller) => {
    liftController = $controller('liftController')
})
```

We now have access to a new liftController.

## Building a spec

We typically instantiate our liftController in a beforeEach block. We can then test it as usual.

```
describe('app', () => {
  describe('liftController', () => {
    // instantiate the app
    beforeEach(module('app'));

    // instantiate the liftController
    var liftController;;
    beforeEach(inject(function($controller){
      liftController = $controller('liftController')
    }));

    // test the liftController
    it("should have a floor", () => {
      expect( liftController.floor ).toBeDefined();
    });
  })
});
```

## Exercise 1 - Test the Calculator App with ngMocks

Take the calculator app and write tests for the controller using ngMocks.



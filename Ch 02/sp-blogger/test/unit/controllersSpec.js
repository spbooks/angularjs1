'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should initialize controller with salary=10000, percentage=10 & calculated result=1000', inject(function($rootScope,$controller) {
	  var scope=$rootScope.$new();
	  $controller('FinanceController',{$scope:scope});
	  expect(scope.salary).toBe(10000);
	  expect(scope.percentage).toBe(10);
	  expect(scope.result()).toBe(1000);
  }));
});

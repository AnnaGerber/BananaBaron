'use strict';
angular.module('bananabaronApp')
.directive('bananacounter', function(){
  return {
    restrict: 'A',
    scope: {
      count: '='
    },
    templateUrl: 'app/gamecounters/bananacounter.html',
    controller: function($scope, $element){
      $scope.bananas = function(){
        var b = [];
        for (var i = 0; i < $scope.count; i++) {
          b.push("banana");
        }
        return b;
      }
      $scope.potential = function() {
        return new Array(10 - $scope.count)
      }
    }
  }
})
.directive('moneycounter', function(){
  return {
    restrict: 'A',
    scope: {
      count: '='
    },
    template: '<div style="padding-top:0.5em"><img style="padding-bottom: 0.5em;" src="assets/images/coin.png"> {{count}}</div>',
    controller: function($scope, $element){

    }
  }
})
.directive('daycounter', function(){
  return {
    restrict: 'A',
    scope: {
      count: '='
    },
    template: '<div>DAY:{{count}}</div>',
    controller: function($scope, $element){

    }
  }
})
.directive('customercounter', function(){
  return {
    restrict: 'A',
    scope: {
      count: '='
    },
    template: '<div>CUSTOMERS: {{count}}</div>',
    controller: function($scope, $element){

    }
  }
})
.directive('impactmeter', function(){
  return {
    restrict: 'A',
    scope: {
      impact: '='
    },
    template: '<div>IMPACT: {{impact}}</div>',
    controller: function($scope, $element){

    }
  }
})
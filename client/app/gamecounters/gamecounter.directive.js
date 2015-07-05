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
    template: '<div style="padding-top:0.5em"><img style="height:22px" src="assets/images/coinbad.png"> {{count}}</div>',
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
.directive('prepcounter', function(){
  return {
    restrict: 'A',
    scope: {
      count: '='
    },
    template: '<div>PREP: {{count}}</div>',
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
    templateUrl: 'app/gamecounters/impactmeter.html',
    controller: function($scope, $element){

    }
  }
})
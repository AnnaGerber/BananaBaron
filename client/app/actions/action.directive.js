'use strict';
angular.module('bananabaronApp')
.directive('actionlist', function(){
  return {
    restrict: 'A',
    templateUrl: 'app/actions/action.html',
    controller: function($scope, $element){


     $scope.showAction = function(action) {
      console.log("show action",action)
      $scope.$parent.selectedAction = action;
      $scope.$parent.showActionWindow = true;
      window.scrollTo(0,0);
     }
    }
  }
})
.directive('actionwindow', function(){
  return {
    restrict:'A',
    templateUrl: 'app/actions/actionwindow.html',
    controller: function($scope) {
      console.log("action window",$scope)
      $scope.closeActionWindow = function(){
          $scope.showActionWindow = false;
      }
      $scope.doAction=function(action){
        console.log("do action",action.outcome)

        if (action.outcome.money){
          $scope.moneycount += action.outcome.money;
        }
        if (action.outcome.bananas) {
          $scope.bananacount += action.outcome.banana;
        }
        if (action.outcome.impact) {
          $scope.impact += action.outcome.impact;
        }
        $scope.showActionWindow = false;
        $scope.getNewState();
      }  
    }
  }
})

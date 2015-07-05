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
        var outcomes = action.outcomes;
        console.log("do",outcomes,$scope)
        $scope.showActionWindow = false;
      }  
    }
  }
})

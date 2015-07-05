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
        console.log("do action",action)
        console.log("do action",action.outcome)
        $scope.bananacount += 1;
        if (action.name=='Sell bananas') {
          $scope.moneycount += 10 * $scope.bananacount;
          $scope.bananacount = 0;

        } else if (action.outcome) {
          if (action.outcome.money){
            if ($scope.moneycount > (0-action.outcome.money)) {
              $scope.moneycount += action.outcome.money;
            } else {
              alert('Not enough money for this action! Try selling some bananas first');
            }
          }
          if (action.outcome.bananas) {
            if($scope.bananacount > (0 - (action.outcome.bananas/10))) {
              $scope.bananacount += action.outcome.bananas / 10;
              console.log("banana count is now",$scope.bananacount)
            } else {
              alert('Not enough bananas! Wait for more to grow');
            }
          }
          if (action.outcome.impact) {
            $scope.impact += action.outcome.impact;
          }
          if (action.outcome.preparation) {
            $scope.preparation += action.outcome.preparation;
          }
        }
        $scope.daycount++;
        $scope.showActionWindow = false;
        $scope.getNewState();
      }  
    }
  }
})

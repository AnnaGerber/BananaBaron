'use strict';

angular.module('bananabaronApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.gameState = {};
    $scope.bananacount = 1;
    $scope.moneycount = 1000;
    $scope.customercount = 0;
    $scope.impact = 0;
    $scope.daycount = 0;

    $scope.currentEvent = {};
    $scope.showInfoWindow = false;

    $scope.showActionWindow = false;
    $scope.selectedAction = null;
    $scope.getNewState = function(){
      $http.get('/api/gamestate').success(function(gameState) {
        console.log("got game state",gameState)
        if (gameState) {
          $scope.events = gameState.events;
          $scope.actions = gameState.actions;
          $scope.currentEvent = $scope.events[0];
        }
      });
    }
    $scope.getNewState();

  });

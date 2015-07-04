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
    
    $http.get('/api/gamestate').success(function(gameState) {
      if (gameState && gameState.length) {
        var gameState = gameState[0]; 
        $scope.events = gameState.events;
        $scope.actions = gameState.actions;
        $scope.currentEvent = $scope.events[1] 
      }
    });

  });

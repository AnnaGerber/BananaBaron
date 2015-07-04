'use strict';

angular.module('bananabaronApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.gameState = {};
    $scope.bananacount = 1;
    $scope.moneycount = 1000;
    $scope.customercount = 0;
    $scope.impact = 0;
    $scope.daycount = 0;

    $http.get('/api/gamestate').success(function(gameState) {
      if (gameState && gameState.length) {
        $scope.gameState = gameState[0];  
      }
    });

  });

'use strict';
angular.module('bananabaronApp')
.directive('infowindow', function(){
  return {
    restrict: 'A',
    templateUrl: 'app/infowindows/infowindow.html',
    controller: function($scope, $element){
       $scope.showInfoWindow = true;
       $scope.closeInfoWindow = function(){
        console.log("close");
        $scope.showInfoWindow = false;
       }
    }
  }
})
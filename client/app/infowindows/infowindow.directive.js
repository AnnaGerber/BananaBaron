'use strict';
angular.module('bananabaronApp')
.directive('infowindow', function(){
  return {
    restrict: 'A',
    templateUrl: 'app/infowindows/infowindow.html',
    controller: function($scope, $element){

       $scope.$watch('events', function(){

        if ($scope.events){

          $scope.imageurl = $scope.events[0].image;            
          $scope.description = $scope.events[0].description;
          console.log("updated event", $scope)
        }
       },true)
       $scope.showInfoWindow = true;
       $scope.closeInfoWindow = function(){
        console.log("close");
        $scope.showInfoWindow = false;
       }
    }
  }
})
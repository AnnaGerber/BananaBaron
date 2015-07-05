'use strict';
angular.module('bananabaronApp')
.directive('infowindow', function(){
  return {
    restrict: 'A',
    templateUrl: 'app/infowindows/infowindow.html',
    controller: function($scope, $element){
       $scope.eventqueue = [];
       $scope.showInfoWindow = false;

       $scope.$watch('events', function(){

        if ($scope.events){
          $scope.eventqueue = [];
          $scope.events.forEach(function(ev, index){
            $scope.eventqueue.push(ev);
          })
          setTimeout($scope.scheduleEvent,1000);
          console.log("updated event", $scope)
        }
       },true)
       
       $scope.scheduleEvent = function(){
        console.log("Schedule event",$scope)
        if ($scope.eventqueue && $scope.eventqueue.length) {
          var ev = $scope.eventqueue.pop();
          console.log("event is",ev)
          $scope.$apply(function(){
            $scope.imageurl = ev.image;  
            $scope.heading = ev.heading;          
            $scope.description = ev.description;
            $scope.showInfoWindow = true;
            $scope.addMarker(ev.location, ev.icon);
          })
          
        }

       }
       $scope.closeInfoWindow = function(){
        console.log("close");
        $scope.showInfoWindow = false;
        var randomTimeout = Math.random() * 20000;
        console.log("next event in ", randomTimeout)
        setTimeout($scope.scheduleEvent,randomTimeout);
       }
    }
  }
})
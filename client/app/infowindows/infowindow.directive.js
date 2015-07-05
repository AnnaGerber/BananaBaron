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
          var randomTimeout = Math.random() * 10000;
          console.log("next event in ", randomTimeout)
          setTimeout($scope.scheduleEvent,randomTimeout);

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
            $scope.moreInfo = ev.moreInfo;
            $scope.variations = ev.variations;
            $scope.layerJSON = ev.layerJSON;
            $scope.articleJSON = ev.articleJSON;
            $scope.showInfoWindow = true;
            if (ev.location) {
             $scope.addMarker(ev.location);
            }
            if ($scope.variations) {
              $scope.variations.forEach(function(v){
                var money = $scope.moneycounter;
                var bananas = $scope.bananacounter;
                var impact = $scope.impact;
                var preparation = $scope.preparation;
                var applyVariation = eval(v.condition);
                var outcome;
                console.log("evaled", v.condition, applyVariation);
                if (applyVariation) {
                  v.showVariation = true;
                  outcome = v.then;
                } else {
                  outcome = v.else;
                }
                if (outcome) {
                  if (outcome.money){
                    if ($scope.moneycount > (0-outcome.money)) {
                      $scope.moneycount += outcome.money;
                    } else {
                      $scope.moneycount = 0;
                    }
                  }
                  if (outcome.bananas) {
                    if($scope.bananacount > (0 - (outcome.bananas/10))) {
                      $scope.bananacount += outcome.bananas / 10;
                    } else {
                      $scope.bananacount = 0;
                    }
                  }
                  if (outcome.impact) {
                    $scope.impact += outcome.impact;
                    if ($scope.impact < 0) {
                      $scope.impact = 0;
                    }
                  }
                  if (outcome.preparation) {
                    $scope.preparation += outcome.preparation;
                    if ($scope.preparation < 0) {
                      $scope.preparation = 0;
                    }
                  }
                }
                
              })
            }
          })
          
        }

       }
       $scope.showMap = function(json) {
        $scope.showInfoWindow = false;
        $scope.showLayerOnMap(json);
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
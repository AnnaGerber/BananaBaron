'use strict';
angular.module('bananabaronApp')
.directive('cartodb', function(){
  return {
    restrict: 'A',
    template: '<div id="map"></div>',
    controller: function($scope, $element){
       $scope.showLayerOnMap = function(layerJSON) {
        if ($scope.currentLayer) {
          //L.removeLayer($scope.currentLayer);
        }
        console.log("show layer", layerJSON)
        cartodb.createLayer($scope.map, layerJSON)
          .addTo($scope.map)
        .on('done', function(layer) {
          console.log("layer added")
          $scope.currentLayer = layer;
        })
        .on('error', function(err) {
          console.log("some error occurred adding map layer: " + err);
        });
       }
       $scope.addMarker = function(ll) {
          console.log("add marker", ll)
          
          try {
            if ($scope.marker) {
              $scope.map.removeLayer($scope.marker)

            }
            // var myIcon = L.icon({
            //     iconUrl: iconPath,   
            //     iconSize: [38, 95],
            //     iconAnchor: [22, 94],
            //     popupAnchor: [-3, -76],
            //     shadowSize: [68, 95],
            //     shadowAnchor: [22, 94]
            // });
            if (ll) {
              $scope.marker = new L.marker(ll, {draggable:true});
              $scope.map.addLayer($scope.marker);  
            }
            
            
            console.log("marker",$scope.marker)
          } catch (e) {
            console.log("error adding marker",e);
          }
       }
    },
    link: function(scope, element) {

      var populationCentres =  "https://jimsteel.cartodb.com/api/v2/viz/0cccd872-220f-11e5-b8a8-0e018d66dc29/viz.json";

      scope.map = new L.Map('map', {
        center: [-21.575718932458464, 144.31640625],
        zoom: 7
      });

      L.tileLayer('https://a.tiles.mapbox.com/v4/annagerber.0ff7cd50/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5uYWdlcmJlciIsImEiOiIzMmQzYzZjMjljZmRlNzUzZTQ4ZjBkYWNmODIxM2VlOCJ9.lShcI19wgAeogoA_zEIiuw', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
      }).addTo(scope.map);

      scope.showLayerOnMap(populationCentres);
      
    }
  };
});
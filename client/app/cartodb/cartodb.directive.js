'use strict';
angular.module('bananabaronApp')
.directive('cartodb', function(){
  return {
    restrict: 'A',
    template: '<div id="map"></div>',
    controller: function($scope, $element){
       $scope.showLayerOnMap = function(layerJSON) {
        console.log("show layer", layerJSON)
       }
       $scope.addMarker = function(point,iconPath) {
          console.log("add marker", point, iconPath)
          var myIcon = L.icon({
              iconUrl: iconPath,   
              iconSize: [38, 95],
              iconAnchor: [22, 94],
              popupAnchor: [-3, -76],
              shadowSize: [68, 95],
              shadowAnchor: [22, 94]
          });

          $scope.latestMarker = L.marker(point).addTo($scope.map);
          console.log("marker",$scope.latestMarker)
       }
    },
    link: function(scope, element) {
      var populationCentres =  "https://jimsteel.cartodb.com/api/v2/viz/0cccd872-220f-11e5-b8a8-0e018d66dc29/viz.json";
      console.log("create cartodb visualisation", populationCentres)
      //cartodb.createVis('map', populationCentres);
      scope.map = new L.Map('map', {
        center: [-21.575718932458464, 144.31640625],
        zoom: 7
      });

    L.tileLayer('https://a.tiles.mapbox.com/v4/annagerber.0ff7cd50/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5uYWdlcmJlciIsImEiOiIzMmQzYzZjMjljZmRlNzUzZTQ4ZjBkYWNmODIxM2VlOCJ9.lShcI19wgAeogoA_zEIiuw', {
      attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    }).addTo(scope.map);

      cartodb.createLayer(map, populationCentres)
          .addTo(scope.map)
          .on('done', function(layer) {

          }).on('error', function() {
            //log the error
          });
      
    }
  };
});
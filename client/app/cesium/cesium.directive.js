'use strict';
angular.module('bananabaronApp')
.directive('cesium', function(){
  return {
    restrict: 'A',
    template: '<div id="cesiumContainer"></div>',
    controller: function($scope, $element){
        // var basemapProvider = new Cesium.CartoDBImageryProvider({
        //         url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        //         credit: 'Basemap courtesy of CartoDB'
        //     });
        //     var viewer = new Cesium.Viewer('cesiumContainer', {
        //         imageryProvider: basemapProvider,
        //         baseLayerPicker: false,
        //         fullscreenButton: false,
        //         homeButton: false,
        //         timeline: false,
        //         navigationHelpButton: false,
        //         animation: false,
        //         scene3DOnly: true,
        //         geocoder: false
        //     });
      var viewer = new Cesium.Viewer('cesiumContainer');

    }
  };
});
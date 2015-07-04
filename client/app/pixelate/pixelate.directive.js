'use strict';
angular.module('bananabaronApp')
.directive('pixelate', function(){
  return {
    restrict: 'A',
    template: '<canvas class="pixelated"></canvas>',

    controller: function($scope) {
        $scope.img;
        function pixelate(v) {
            console.log("pixelate!",v)
            var size = 20,
                // cache scaled width and height
                w = $scope.canvas.width * size,
                h = $scope.canvas.height * size;
            // draw original image to the scaled size
            $scope.ctx.drawImage($scope.img, 0, 0, w, h);
            // then draw that scaled image thumb back to fill canvas
            // As smoothing is off the result will be pixelated
            $scope.ctx.drawImage($scope.canvas, 0, 0, w, h, 0, 0, $scope.canvas.width, $scope.canvas.height);
        }
        $scope.$watch('imageurl',function(nv, ov){
            console.log("image changed", nv)
            $scope.img = new Image();
            // wait until image is actually available
            $scope.img.onload = pixelate;

            $scope.img.src = $scope.imageurl;


        }, true)
    },
    link: function(scope, element) {

        // The pixelate function (C) Ken Fyrstenberg, Epistemex, License: CC3.0-attr
        scope.canvas = element.find('canvas').get(0);
        var ctx = scope.canvas.getContext('2d');
        scope.ctx = ctx;

        // turn off image smoothing - this will give the pixelated effect
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        


    }
  };
});

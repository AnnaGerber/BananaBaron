'use strict';
angular.module('bananabaronApp')
.directive('pixelate', function(){
  return {
    restrict: 'A',
    template: '<canvas class="pixelated"></canvas>',
    controller: function($scope, $element){
       
    },
    link: function(scope, element) {
      // The pixelate function (C) Ken Fyrstenberg, Epistemex, License: CC3.0-attr
    var ctx = canvas.getContext('2d'),
        img = new Image(),
        play = false;

    // turn off image smoothing - this will give the pixelated effect
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

// wait until image is actually available
img.onload = pixelate;


img.src = 'http://www.greenfudge.org/wp-content/uploads/2010/07/banana-carbon-footprint.jpg';

// MAIN function
function pixelate(v) {
    var size = 5,
        // cache scaled width and height
        w = canvas.width * size,
        h = canvas.height * size;
    // draw original image to the scaled size
    ctx.drawImage(img, 0, 0, w, h);
    // then draw that scaled image thumb back to fill canvas
    // As smoothing is off the result will be pixelated
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}


    }
  };
});

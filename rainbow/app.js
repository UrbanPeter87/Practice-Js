var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var rectWidth = canvasWidth;
var rectHeight = canvasHeight;

var positionX = 0;
var positionY = 0;

var hue = 360;
var saturation = 60;
var lightness = 45;

for (var rectCounter = 0; rectCounter < 17; rectCounter++) {
    context.fillStyle = 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
    context.fillRect(positionX, positionY, rectWidth, rectHeight);
    hue -= 360 / 17;
    positionX += 10;
    positionY += 10;
    rectWidth -= 20;
    rectHeight -= 20;
}
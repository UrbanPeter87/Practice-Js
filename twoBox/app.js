var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var size = 100;

var positionX = canvasWidth / 2 - size * 0.75;
var positionY = canvasHeight / 2 - size * 0.75;

context.fillStyle = 'rgba(255,0,0,.5)';
context.fillRect(positionX, positionY, size, size);

positionX += size / 2;
positionY += size / 2;

context.fillStyle = 'rgba(0,0,255,.5)';
context.fillRect(positionX, positionY, size, size);
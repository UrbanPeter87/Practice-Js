var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var rectWidth = 250;
var rectHeight = 50;

var positionX = (canvasWidth - rectWidth) / 2;
var positionY = (canvasHeight - rectHeight) / 2;

context.fillStyle = 'red';
context.fillRect(positionX, positionY - rectHeight, rectWidth, rectHeight);

context.fillStyle = 'white';
context.fillRect(positionX, positionY, rectWidth, rectHeight);

context.fillStyle = 'green';
context.fillRect(positionX, positionY + rectHeight, rectWidth, rectHeight);
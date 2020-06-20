var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var positionX = 150;
var positionY = 225;
var size = 150;

context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(positionX + size, positionY);
context.lineTo(positionX + size / 2, positionY - size);
context.lineTo(positionX, positionY);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill();
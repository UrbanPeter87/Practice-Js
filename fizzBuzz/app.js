var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 50;
var positionX = 20;
var positionY = 15;

for (var squareCounter = 1; squareCounter <= 15; squareCounter++) {
    if (squareCounter % 3 == 0) {
        context.fillStyle = 'rgba(0,0,255,.5)';
    }  else if (squareCounter % 5 == 0) {
        context.fillStyle = 'rgba(255,255,0,.5)';
    }  else if (squareCounter % 15 == 0) {
        context.fillStyle = 'rgba(0,255,0,.5)';
    }  else {
        context.fillStyle = 'rgba(0,0,0,.5)';
    }
    context.fillRect(positionX * squareCounter, positionY * squareCounter, size, size);
}
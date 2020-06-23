var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

function lineToCenter(positionX, positionY, color) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(canvasWidth / 2, canvasHeight / 2);
    context.strokeStyle = color;
    context.stroke();
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var lineCounter = 1; lineCounter <= 1000; lineCounter++) {
    lineToCenter(random(canvasWidth, 0), random(canvasHeight, 0), 'teal');
}
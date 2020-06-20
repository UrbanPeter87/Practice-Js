var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 30;
var positionY = 50;
var padding = 5;

var red = 255;
var green = 79;
var blue = 120;

for (var rowCounter = 0; rowCounter < 6; rowCounter++) {
    var positionX = 125;
    for (var squareCounter = 0; squareCounter < 6; squareCounter++) {
        context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        context.fillRect(positionX, positionY, size, size);
        red -= 7;
        positionX += size + padding;
    }
    blue += 15;
    positionY += size + padding;
}
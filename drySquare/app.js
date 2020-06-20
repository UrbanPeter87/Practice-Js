var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var position = 20;
var size = 45;

for (var squareCounter = 0; squareCounter < 10; squareCounter++) {
    context.fillStyle = 'rgba(255,165,0,.5)';
    context.fillRect(position, position, size, size);
    position += size / 2;
}
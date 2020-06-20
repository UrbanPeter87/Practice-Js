var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var position = 120;
var size = 100;
var padding = 5;

for (var triangleCounter = 0; triangleCounter <30; triangleCounter++) {
    context.beginPath();
    context.moveTo(position, position);
    context.lineTo(position + size, position);
    context.lineTo(position + size / 2, position - size);
    context.lineTo(position, position);
    context.strokeStlye = 'gray';
    context.stroke();
    position = position + padding;
}
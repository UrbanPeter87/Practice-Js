var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

context.beginPath();
context.moveTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
context.lineTo(canvasWidth, canvasHeight);
context.strokeStyle = 'red';
context.stroke();

context.beginPath();
context.moveTo(canvasWidth - canvasWidth, canvasHeight);
context.lineTo(canvasWidth, canvasHeight - canvasHeight);
context.strokeStyle = 'red';
context.stroke();
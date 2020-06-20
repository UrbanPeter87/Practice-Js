var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

context.beginPath();
context.moveTo(canvasWidth - canvasWidth, canvasHeight / 2);
context.lineTo(canvasWidth, canvasHeight / 2);
context.strokeStyle = 'red';
context.stroke();

context.beginPath();
context.moveTo(canvasWidth / 2, canvasHeight - canvasHeight);
context.lineTo(canvasWidth / 2, canvasHeight);
context.strokeStyle = 'green';
context.stroke();
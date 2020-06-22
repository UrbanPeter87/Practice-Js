var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

for (var unitCounter = 0; unitCounter <= canvasWidth; unitCounter++) {
    if (unitCounter % 3 === 0) {
        context.beginPath();
        context.moveTo(unitCounter, canvasHeight / 2);
        if (unitCounter % 2 === 0) {
            context.lineTo(canvasWidth / 2, canvasHeight - canvasHeight);
        } else {
            context.lineTo(canvasWidth / 2, canvasHeight);
        }
        context.strokeStyle = 'rgba(255,0,0,.5)';
        context.stroke();
    }
}
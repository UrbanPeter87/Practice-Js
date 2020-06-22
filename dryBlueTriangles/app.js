var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

for (var unitCounter = 0; unitCounter <= canvasWidth; unitCounter++) {
        context.beginPath();
        context.moveTo(unitCounter, canvasHeight / 2);
       if (unitCounter % 4 === 0) {
            context.lineTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
        } else if (unitCounter % 4 === 1) {
            context.lineTo(canvasWidth, canvasHeight - canvasHeight); 
        } else if (unitCounter % 4 === 2) {
            context.lineTo(canvasWidth - canvasWidth, canvasHeight);
        } else if (unitCounter % 4 === 3) {
            context.lineTo(canvasWidth, canvasHeight);
        } else {
            console.log('Something is wrong.');
        }
        context.strokeStyle = 'rgba(0,0,255,.5)';
        context.stroke();
}        
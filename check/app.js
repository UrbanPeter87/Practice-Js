var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

function drawCheckeredPattern(row, col) {
    for (var rowCounter = 0; rowCounter < row; rowCounter++) {
        for (var colCounter = 0; colCounter < col; colCounter++) {
            if (colCounter % 2 === rowCounter % 2) {
                context.fillStyle = 'white';
            } else {
                context.fillStyle = 'black';
            }
            context.fillRect(colCounter * canvasWidth / col, rowCounter * canvasHeight / row, canvasWidth / col, canvasHeight / row);
        }
    }
}

drawCheckeredPattern(8, 8);
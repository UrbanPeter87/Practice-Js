var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var base = 100;
var altitude = 86.6;

function drawTriangle(positionX, positionY) {
    for (var rowCounter = 0; rowCounter < 3; rowCounter++) {
        for (var triangleCounter = 0; triangleCounter <= rowCounter; triangleCounter++) {
            context.beginPath();
            context.moveTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
            context.lineTo(positionX - (rowCounter + 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
            context.lineTo(positionX - (rowCounter - 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
            context.lineTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
            if (rowCounter === 0) {
                context.strokeStyle = 'rgb(227,98,102)';
                context.fillStyle = 'rgb(227,98,102)';
            } else if (rowCounter === 1) {
                context.strokeStyle = 'rgb(38,172,73)';
                context.fillStyle = 'rgb(38,172,73)';
            } else {
                context.strokeStyle = 'rgb(34,128,128)';
                context.fillStyle = 'rgb(34,128,128)';
            }
            context.stroke();
            context.fill();
        }
    }
}

drawTriangle(225, 33);
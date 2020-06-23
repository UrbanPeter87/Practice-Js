var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function star(positionX, positionY, size) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX + size, positionY);
    context.lineTo(positionX + size * 0.15, positionY + size * 0.5);
    context.lineTo(positionX + size * 0.5, positionY - size * 0.4);
    context.lineTo(positionX + size * 0.85, positionY + size * 0.5);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'rgb(233,159,184)';
    context.stroke();
    context.fillStyle = 'rgb(233,159,184)';
    context.fill();
}

star(40, 50, 75);
star(130, 120, 100);
star(250, 220, 150);
function drawRectFigures(ctx) {
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10, 10, 55, 50);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 55, 50);
}

function drawNestedRect(ctx) {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(40, 40, 70, 70);
  ctx.strokeRect(50, 50, 50, 50);
}

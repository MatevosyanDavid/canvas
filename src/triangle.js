function drawTriangleFigures(ctx) {
  ctx.beginPath();
  ctx.moveTo(10, 10);

  ctx.lineTo(10, 50);
  ctx.lineTo(50, 10);

  ctx.fill();

  ctx.beginPath();

  ctx.moveTo(60, 20);

  ctx.lineTo(20, 60);
  ctx.lineTo(60, 60);
  ctx.lineTo(60, 20);
  ctx.closePath();
  ctx.stroke();
}

function drawTriangle(ctx) {
  ctx.beginPath();
  ctx.moveTo(105, 105);
  ctx.lineTo(75, 75);
  ctx.lineTo(105, 50);
  ctx.fill();
  ctx.closePath();
}

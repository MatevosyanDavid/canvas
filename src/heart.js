// ! Bezier curve Heart icon
function drawHeart(ctx) {
  // Position for bezier curve
  ctx.beginPath();
  ctx.arc(90, 30, 1, 0, Math.PI * 2);
  ctx.moveTo(60, 30);
  ctx.arc(60, 30, 1, 0, Math.PI * 2);

  ctx.moveTo(42.5, 65);
  ctx.arc(42.5, 65, 1, 0, Math.PI * 2);

  ctx.moveTo(60, 95);
  ctx.arc(60, 95, 1, 0, Math.PI * 2);

  ctx.moveTo(90, 100);
  ctx.arc(90, 100, 1, 0, Math.PI * 2);

  ctx.moveTo(110, 30);
  ctx.arc(110, 30, 1, 0, Math.PI * 2);

  ctx.moveTo(140, 30);
  ctx.arc(140, 30, 1, 0, Math.PI * 2);

  ctx.moveTo(155, 65);
  ctx.arc(155, 65, 1, 0, Math.PI * 2);

  ctx.moveTo(140, 95);
  ctx.arc(140, 95, 1, 0, Math.PI * 2);

  ctx.moveTo(110, 100);
  ctx.arc(110, 100, 1, 0, Math.PI * 2);

  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.bezierCurveTo(90, 30, 60, 30, 50, 50);

  ctx.quadraticCurveTo(42.5, 65, 50, 80);
  ctx.bezierCurveTo(60, 95, 90, 100, 100, 120);

  ctx.moveTo(100, 50);
  ctx.bezierCurveTo(110, 30, 140, 30, 150, 50);
  ctx.quadraticCurveTo(157.5, 65, 150, 80);
  ctx.bezierCurveTo(140, 95, 110, 100, 100, 120);

  ctx.stroke();
  ctx.closePath();
}

function drawCircleFigures(ctx) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();

      const x = 25 + j * 50;
      const y = 25 + i * 50;
      const radius = 20;
      const startAngle = 0;

      const endAngle = Math.PI + (Math.PI * j) / 2;
      const anticlockwise = i % 2 == 0 ? false : true;

      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}

function drawCircleFiguresFill(ctx) {
  ctx.beginPath();
  ctx.arc(50, 10, 40, 0, Math.PI, false);
  ctx.moveTo(190, 50);
  ctx.arc(150, 50, 40, 0, Math.PI, true);

  ctx.moveTo(90, 100);
  ctx.arc(50, 100, 40, 0, 1.5 * Math.PI);

  ctx.moveTo(140, 100);
  ctx.arc(100, 100, 40, 0, 1.5 * Math.PI, true);

  ctx.fill();

  ctx.closePath();
}

function drawCircleFiguresStroke(ctx) {
  ctx.beginPath();
  ctx.arc(50, 10, 40, 0, Math.PI, false);
  ctx.moveTo(190, 50);
  ctx.arc(150, 50, 40, 0, Math.PI, true);

  ctx.moveTo(90, 100);
  ctx.arc(50, 100, 40, 0, 1.5 * Math.PI);

  ctx.moveTo(140, 100);
  ctx.arc(100, 100, 40, 0, 1.5 * Math.PI, true);

  ctx.stroke();

  ctx.closePath();
}

function drawSmile(ctx) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
}

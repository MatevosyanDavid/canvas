function drawPath2D(ctx) {
  const rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);
  ctx.stroke(rectangle);

  const circle = new Path2D();
  circle.arc(100, 35, 25, 0, Math.PI * 2);
  ctx.fill(circle);
}

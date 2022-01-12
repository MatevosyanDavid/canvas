// https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function init() {
  ctx.strokeStyle = 'black';

  // draw(ctx);
  drawGame(ctx);
  // drawSmile(ctx);
  // drawHeart(ctx);
  // drawTriangle(ctx);
  // drawMessenger(ctx);
  // drawCircleFigures(ctx);
  // drawTriangleFigures(ctx);
  // drawCircleFiguresFill(ctx);
  // drawCircleFiguresStroke(ctx);
}

init();

canvas.addEventListener('mousemove', function (e) {
  const coords = document.querySelector('.coords');
  const { layerX, layerY } = e;
  coords.innerHTML = `
    X: ${layerX}
    Y: ${layerY}
  `;
});

function draw(ctx) {
  for (let i = 0; i <= canvas.height; i += 10) {
    if (i !== 0 || i !== canvas.height) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
      ctx.closePath();
    }
  }

  for (let i = 0; i <= canvas.width; i += 10) {
    if (i !== 0 || i !== canvas.width) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
      ctx.closePath();
    }
  }
}

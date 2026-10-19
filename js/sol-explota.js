let sunSize = 50;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(135, 206, 235);
  
  // Sol que crece con el bucle
  fill(255, 204, 0);
  ellipse(200, 200, sunSize, sunSize);
  
  sunSize += 1;
  if (sunSize > 400) {
    sunSize = 50; // Reinicia la animación
  }
}

let leftX = 120;
let rightX = 280;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(180, 220, 255);
  
  // Sol detrás de las nubes
  fill(255, 220, 0);
  ellipse(200, 150, 80, 80);
  
  // Nube izquierda
  fill(255);
  ellipse(leftX, 150, 90, 60);
  
  // Nube derecha
  ellipse(rightX, 150, 90, 60);
  
  // Movimiento de separación
  leftX -= 0.5;
  rightX += 0.5;
  
  if (leftX < -50) {
    leftX = 120;
    rightX = 280;
  }
}

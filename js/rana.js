function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(200, 230, 255);
  
  // Ojos de la rana
  fill(255);
  ellipse(150, 150, 60, 60);
  ellipse(250, 150, 60, 60);
  
  fill(0);
  ellipse(150, 150, 20, 20);
  ellipse(250, 150, 20, 20);
  
  // Cabeza / Cuerpo
  fill(34, 139, 34);
  ellipse(200, 230, 200, 150);
  
  // Boca
  fill(255, 100, 100);
  ellipse(200, 250, 120, 40);
}
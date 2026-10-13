function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  // Fondo nocturno
  background(20, 24, 50);
  
  // Suelo
  fill(255);
  rect(0, 320, 400, 80);
  
  // Muñeco
  ellipse(200, 300, 120, 120);
  ellipse(200, 220, 90, 90);
  ellipse(200, 150, 60, 60);
  
  // Botones y ojos
  fill(0);
  ellipse(190, 145, 8, 8);
  ellipse(210, 145, 8, 8);
  ellipse(200, 200, 10, 10);
  ellipse(200, 225, 10, 10);
  ellipse(200, 250, 10, 10);
  
  // Zanahoria
  fill(255, 120, 0);
  triangle(200, 150, 200, 156, 225, 153);
  
  // Sombrero
  fill(50);
  rect(170, 120, 60, 8);
  rect(180, 85, 40, 35);
}
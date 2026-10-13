function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  // Cielo
  background(135, 206, 235);
  
  // Sol
  fill(255, 215, 0);
  ellipse(80, 80, 80, 80);
  
  // Suelo con nieve
  fill(245, 245, 255);
  rect(0, 300, 400, 100);
  
  // Muñeco de nieve
  fill(255);
  ellipse(280, 320, 90, 90);
  ellipse(280, 250, 70, 70);
  ellipse(280, 195, 50, 50);
  
  // Ojos y nariz
  fill(0);
  ellipse(270, 190, 6, 6);
  ellipse(290, 190, 6, 6);
  
  fill(255, 140, 0);
  triangle(280, 198, 280, 204, 260, 201);
}

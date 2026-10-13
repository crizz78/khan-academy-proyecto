function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(230, 230, 250);
  
  // Plato
  fill(220);
  ellipse(200, 200, 320, 320);
  fill(255);
  ellipse(200, 200, 260, 260);
  
  // Comida: Carne
  fill(120, 60, 20);
  ellipse(160, 180, 100, 80);
  
  // Guisantes (Verduras)
  fill(50, 180, 50);
  ellipse(240, 160, 20, 20);
  ellipse(260, 175, 20, 20);
  ellipse(235, 190, 20, 20);
  
  // Puré
  fill(245, 225, 160);
  ellipse(200, 240, 90, 70);
}
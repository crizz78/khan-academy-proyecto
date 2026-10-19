let x = 0;
let y = 0;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(10, 15, 35);
  
  // Estrellas estáticas de fondo
  fill(255);
  ellipse(50, 100, 3, 3);
  ellipse(150, 300, 4, 4);
  ellipse(320, 80, 3, 3);
  ellipse(280, 250, 3, 3);
  
  // Estela de la estrella fugaz
  stroke(255, 255, 200, 150);
  strokeWeight(3);
  line(x, y, x - 30, y - 30);
  noStroke();
  
  // Cabeza de la estrella
  fill(255, 255, 200);
  ellipse(x, y, 8, 8);
  
  x += 5;
  y += 5;
  
  if (x > 450) {
    x = 0;
    y = 0;
  }
}

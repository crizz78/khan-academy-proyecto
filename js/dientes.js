function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(240, 200, 200);
  
  // Cara del conejo
  fill(255);
  ellipse(200, 180, 200, 200);
  
  // Ojos
  fill(0);
  ellipse(160, 150, 20, 20);
  ellipse(240, 150, 20, 20);
  
  // Nariz
  fill(255, 150, 180);
  triangle(200, 180, 190, 170, 210, 170);
  
  // Boca
  stroke(0);
  strokeWeight(2);
  line(200, 180, 200, 200);
  noStroke();
  
  // Dientes
  fill(255);
  rect(185, 200, 14, 25);
  rect(201, 200, 14, 25);
  stroke(200);
  line(199, 200, 199, 225);
  noStroke();
}
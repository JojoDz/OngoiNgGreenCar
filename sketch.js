function setup() {
  createCanvas(500, 500);
  background(220);
  x= width/2; 
  y= height/2;
  speed = 2.2;
}

function drawnCar(x, y) {
  //dessiner la voiture
  fill(0)
  rect(x+10, y-100, 90, 50, 10, 10, 0, 0);
  fill('green');
  rect(x, 198, 110, 50);
  fill('blue');
  ellipse(x, y, 40, 40);
  ellipse(x + 110, y, 40, 40);
}

function draw() {
  background(220);
  drawnCar(x, y);
  //condition si la voiture touche le bord droit : reviens en arrière	
  if (x + 110 >= width || x < 0) {
	speed = speed * -1;
  }

  //vitesse de la voiture
	x = x + speed;
}

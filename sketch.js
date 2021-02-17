function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  background(220);
  //dessiner la voiture
  fill(0)
  rect(car.x+10, car.y-100, 90, 50);
  fill(0, car.g, 0);
  rect(car.x, 198, 110, 50);
  fill(255);
  ellipse(car.x, car.y, 40, 40);
  ellipse(car.x + 110, 250, 40, 40);
  
  //condition si la voiture touche le bord droit : reviens en arrière	
  if (car.x + 110 >= width || car.x < 0) {
	speed = speed * -1;
  }

  //vitesse de la voiture
	car.x = car.x + speed;
}
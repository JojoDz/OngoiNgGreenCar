function setup() {
    createCanvas(400, 400);
    x=width/2;
    y=height/2;
    speed=2;
  }
  
  function spaceship(x, y) {
    fill('orange');
    stroke('white');
    ellipse(x,y,60,60);
    fill('gold');
    rect(x-80,y-13,50,25);
    rect(x+31,y-13,50,25);
    rect(x-105,y-25,25,50);
    rect(x+81,y-25,25,50);
    triangle(x-105, y-26, x-80, y-26, x-20, y-150);
    triangle(x-105,y+26,x-80,y+26,x-20,y+150);
    triangle(x+81,y+26,x+106,y+26,x+20,y+150);
    triangle(x+81,y-26,x+106,y-26,x+20,y-150);
    fill('red');
    ellipse(x,y,45,45);
  }
  
  function draw() {
    background('darkblue');
    spaceship(x,y);
    x = speed + x;
    if (x + 110 >= width || x - 110 < 0) {
      speed = speed * -1;
    }  
  }
  
  
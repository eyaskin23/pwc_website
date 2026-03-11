/*
Evelyn Yaskin: ARTG 2262 Self-Portrait Assignment 3
Lab 4-Debug
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {

background(220);
  
noStroke();
fill('blue');
rect(150, 325, 150,100);
  
// hair - right bang
fill('darkGoldenRod');
noStroke();
translate(200, 180);
rotate(PI / 8);
arc(50, 0, 160, 160, PI, TWO_PI, PIE);
rotate(-PI / 8);
translate(-200, -180);

  
// hair - left bang
noStroke();
translate(200, 180);
rotate(-PI / 8);
arc(5, 0, 160, 120, PI, TWO_PI, PIE);
rotate(PI / 8);
translate(-200, -180);
  
// long hair left
fill('darkGoldenRod');
noStroke();

beginShape();
curveVertex(144, 162);
curveVertex(131, 235);
curveVertex(109, 270);
curveVertex(123, 314);
curveVertex(106, 352);
curveVertex(153, 348);
curveVertex(172, 276);
endShape(CLOSE);
  
textSize(12);
fill('cornSilk');
textAlign(RIGHT, BOTTOM);
text('Evelyn Y ❤️', width - 10, height - 10);

// long hair right
fill('darkGoldenRod');
noStroke();
translate(440, 0);   
scale(-1, 1);

beginShape();
curveVertex(144, 162);
curveVertex(131, 235);
curveVertex(109, 270);
curveVertex(123, 314);
curveVertex(106, 352);
curveVertex(153, 348);
curveVertex(172, 276);
endShape(CLOSE);
  
// head
fill('cornSilk');
circle(220,230,150);
  
fill('black');
triangle(221, 230, 229, 246, 213, 246);

// eyes
circle(250,220,20);
circle(190,220,20);

fill('white')
circle(255,225,5);
circle(195,225,5);

fill('brown')
circle(250,220,10);
circle(190,220,10);

fill('black');
noStroke();
  
noFill();
stroke('black');
strokeWeight(2);

// arc(x, y, width, height, startAngle, stopAngle)
arc(220, 265, 44, 20, 0, PI);
  
noStroke();
fill('cornSilk')
  
rect(200, 300, 45, 40);

}

  



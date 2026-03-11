/*
Evelyn Yaskin ARTG2262 PWC 
Assignment 4 - FRUITS
*/
function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  background(240);
  let scaleFactor = 0.6;

  // repeat rows
  for (let row = 0; row < 3; row++) {
    push();
    translate(20, row * 140);
    scale(scaleFactor);

    // STRAWBERRY
fill('red');
noStroke();

    beginShape();
    curveVertex(65, 40);
    curveVertex(65, 40);
    curveVertex(30, 60);
    curveVertex(25, 100);
    curveVertex(45, 140);
    curveVertex(65, 160);
    curveVertex(85, 140);
    curveVertex(105, 100);
    curveVertex(100, 60);
    curveVertex(65, 40);
    curveVertex(65, 40);
    endShape(CLOSE);

    fill('green');
    beginShape();
    vertex(45, 55);
    vertex(30, 30);
    vertex(55, 45);
    vertex(65, 30);
    vertex(75, 45);
    vertex(100, 30);
    vertex(85, 55);
    endShape(CLOSE);

    // seeds
    fill('black');
    noStroke();
    for (let y = 80; y <= 125; y += 15) {
      for (let x = 40; x <= 85; x += 15) {
        ellipse(x + 3, y, 4, 6);
      }
    }

    // ORANGE
    fill('orange');
    arc(180, 100, 100, 100, 0, TWO_PI);

    fill('green');
    beginShape();
    vertex(165, 55);
    vertex(145, 30);
    vertex(170, 45);
    vertex(180, 30);
    vertex(190, 45);
    vertex(215, 30);
    vertex(195, 55);
    endShape(CLOSE);

    // PINEAPPLE
    fill('gold');
    noStroke();

    beginShape();
    curveVertex(300, 50);
    curveVertex(300, 50);
    curveVertex(260, 80);
    curveVertex(255, 120);
    curveVertex(270, 160);
    curveVertex(300, 175);
    curveVertex(330, 160);
    curveVertex(345, 120);
    curveVertex(340, 80);
    curveVertex(300, 50);
    curveVertex(300, 50);
    endShape(CLOSE);

    fill('green');
    beginShape();
    vertex(280, 65);
    vertex(260, 25);
    vertex(290, 50);
    vertex(300, 25);
    vertex(310, 50);
    vertex(340, 25);
    vertex(320, 65);
    endShape(CLOSE);

    stroke(80, 150, 90);
    strokeWeight(2);
    noFill();
    arc(280, 100, 20, 10, PI, TWO_PI);
    arc(325, 100, 20, 10, PI, TWO_PI);
    arc(280, 125, 20, 10, PI, TWO_PI);
    arc(325, 125, 20, 10, PI, TWO_PI);

// LEMON
fill('yellow');
noStroke();

beginShape();
curveVertex(420, 40);
curveVertex(420, 40);
curveVertex(385, 60);
curveVertex(380, 100);
curveVertex(400, 140);
curveVertex(420, 160);
curveVertex(440, 140);
curveVertex(460, 100);
curveVertex(455, 60);
curveVertex(420, 40);
curveVertex(420, 40);
endShape(CLOSE);

fill('green');
beginShape();
vertex(405, 55);
vertex(390, 30);
vertex(415, 45);
vertex(425, 30);
vertex(435, 45);
vertex(460, 30);
vertex(445, 55);
endShape(CLOSE);
    
// APPLE
fill('forestGreen'); 
noStroke();

// apple body 
ellipse(540, 100, 95, 95);

// stem
stroke(120, 80, 40);
strokeWeight(4);
line(540, 55, 540, 40);

// leaf
noStroke();
fill('green');
beginShape();
vertex(540, 45);
vertex(560, 35);
vertex(555, 55);
endShape(CLOSE);

    pop();
  }
}

function keyPressed() {
// Was it the upper/lower 'S' key?
if (key == 'S' || key == 's') {
saveCanvas("assignment[3]_pattern_yaskin_evelyn");
}
}


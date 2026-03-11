/* Evelyn Yaskin (yaskin.e@northeastern.edu): A Starry Night
ARTG2262 Assignment 5
*/
// setup variables
let buildingCount = 30;
let starCount = 3;
let starX = [];
let starY = [];
let starVelX = [];
let starVelY = [];
let backCount = 20;
let backX = [];
let backY = [];
let backW = [];

// Building arrays 
let x = [];
let y = [];
let w = [];

function setup() {
  createCanvas(windowHeight, windowWidth);
  noStroke();
  fill("white");
  
  // setup for back buildings
  let backCurrentX = 0;

for (let i = 0; i < backCount; i++) {
  backW[i] = random(30, 60);
  backY[i] = random(180, 300);  
  backX[i] = backCurrentX;
  backCurrentX += backW[i] + random(2, 6);
  
}

  // setup for buildings
  let currentX = 0;
  
  for (let i = 0; i < buildingCount; i++) {
    x[i] = currentX;
    y[i] = random(120, 500);
    w[i] = random(20,50);
    currentX += w[i] + random(2,8);
    
  }
  
  // setup for shooting stars
  for (let i = 0; i < starCount; i++) {
    starX[i] = random(-width, width);
    starY[i] = random(0,150);
    let v = random(1,3);
    starVelX[i] = v;
    starVelY[i] = v;
  }
}

function draw() {
  
  fill(10,10,40,80);
  rect(0,0,windowWidth,windowHeight);
  
  // timer 
  let date = new Date();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayOfWeek = date.getDay();
  
  if (dayOfWeek == 1) {
    dayOfWeek = "Monday";
  }
  if (dayOfWeek == 2) {
    dayOfWeek = "Tuesday";
  }
  if (dayOfWeek == 3) {
    dayOfWeek = "Wednesday";
  }
  if (dayOfWeek == 4) {
    dayOfWeek = "Thursday";
  }
  if (dayOfWeek == 5) {
    dayOfWeek = "Friday";
  }
  if (dayOfWeek == 6) {
    dayOfWeek = "Saturday";
  }
  if (dayOfWeek == 7) {
    dayOfWeek = "Sunday";
  }
  
  fill('white');
  textSize(40);
  text(dayOfWeek + " " + hours + " : " + minutes + " : " + seconds, 180, 150);

  drawShootingStars();
  drawBackBuildings();
  drawBuildings();
}

function drawBuildings(){
  noStroke();
  fill('white');
  
  fill(255,240,180);
  ellipse(80,80,80);
  
  fill(10,10, 40);
  ellipse(105,80,80);
  
  for (let i = 0; i < buildingCount; i++) {
    
    let buildingTop = windowHeight - y[i];
    
    // Draw building
    fill('black');
    
    rect(x[i], windowHeight - y[i], w[i], y[i]);
    
    // detect hovering
    let isHovering = 
        mouseX > x[i] &&
        mouseX < x[i] + w[i] &&
        mouseY > buildingTop &&
        mouseY < windowHeight;
    
    // Window settings
    let windowW = 8;
    let windowH = 10;
    let padding = 5;
    
    
    // change color of windows when hovering 
    if (isHovering) {
      fill('yellow');
    } else {
      fill('gray');
    }
        
    let startX = x[i] + padding;
    let startY = windowHeight - y[i] + padding;
    
    for (let wx = startX; wx < x[i] + w[i] - padding; wx += windowW + padding) {
      for (let wy = startY; wy < windowHeight - padding; wy += windowH + padding) {
        rect(wx, wy, windowW, windowH);
      }
    }
  }
}
  
  function drawShootingStars() {
    for (let i = 0; i < starCount; i++) {
      
      textSize(20);
     text('⭐', starX[i], starY[i]);
     starX[i] += starVelX[i];
    starY[i] += starVelY[i];
      
      if (starX[i] > windowWidth || starY[i] > windowHeight) {
      starY[i] = 0;
      starX[i] = random(-windowWidth, windowWidth);
    }
  }
}
    
function drawBackBuildings() {
  noStroke();
  fill(20);  
  
  for (let i = 0; i < backCount; i++) {
    rect(backX[i], windowHeight - backY[i], backW[i], backY[i]);
    
  }
}




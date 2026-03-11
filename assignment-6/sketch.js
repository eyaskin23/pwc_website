let brushColor = "black";
let brushSlider;
let eraserSlider;

let drawingLayer;
let eraserMode = false;

let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "black",
  "magenta"
];

function setup() {
  createCanvas(400, 500);
  textSize(50);
  
  drawingLayer = createGraphics(400,500);
  background("grey");

  drawingLayer.fill("white");
  drawingLayer.noStroke();
  drawingLayer.square(40, 40, 320);
  drawColorPalette();
  createTools();
}

function createTools() {
  
  // Brush Size Slider
  brushSlider = createSlider(1, 30, 5);
  brushSlider.position(100, 410);

  // Eraser Size Slider
  eraserSlider = createSlider(5, 60, 20);
  eraserSlider.position(250, 410);
  
  // Clear Button
  let clearButton = createButton("Clear");
  clearButton.position(25,430);
  clearButton.mousePressed(clearCanvas);
  
  // Save Button
  let saveButton = createButton("Save");
  saveButton.position(25,460);
  saveButton.mousePressed(() => 
    { save(drawingLayer, "mydrawing.png");
  });

  // Eraser Button
  let eraserButton = createButton("Eraser");
  eraserButton.position(25, 400);
  eraserButton.mousePressed(() => {
    eraserMode = true;
  });
}

// draw function
// changes brushColor based on which color you select
function draw() {
  fill("black");
  textSize(20);
  text("Welcome to the Drawing App!", 65, 30);
  
  textSize(12);
  text("Brush Size", 105, 407);
  text("Eraser Size", 255, 407);
  
  image(drawingLayer, 0,0);
  if (mouseIsPressed && mouseY < 360 && mouseY > 40 && mouseX > 40 && mouseX < 360) {
    let brushSize = eraserMode ? eraserSlider.value() : brushSlider.value();
    let radius = brushSize / 2;

    let x1 = constrain(pmouseX, 40 + radius, 360 - radius);
    let y1 = constrain(pmouseY, 40 + radius, 360 - radius);
    let x2 = constrain(mouseX, 40 + radius, 360 - radius);
    let y2 = constrain(mouseY, 40 + radius, 360 - radius);
    
    if (eraserMode) {
      drawingLayer.stroke("white");
      drawingLayer.strokeWeight(eraserSlider.value());
    } else {
      drawingLayer.stroke(brushColor);
      drawingLayer.strokeWeight(brushSlider.value());
    }
    drawingLayer.line(x1, y1, x2, y2);
  }
  drawColorPalette();
  drawEraserPreview();
}

function drawColorPalette() {
  noStroke();
  textSize(24);
  
  text("🖌️", 25, 390);
  
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    square(55 + i * 31, 365,25);
  }
}

function mousePressed() {
  if (mouseY > 365 && mouseY < 390) {
    let index = floor((mouseX - 55) / 31);
    
    if (index >= 0 && index < colors.length) {
      brushColor = colors[index];
      eraserMode = false;
    }
  }
}

function drawEraserPreview() {
  if (
    eraserMode &&
    !mouseIsPressed &&
    mouseX > 40 && mouseX < 360 &&
    mouseY > 40 && mouseY < 360
  ) {
    fill("white");        
    stroke("black");     
    strokeWeight(1);
    circle(mouseX, mouseY, eraserSlider.value());
  }
}

//clears the whole canvas
function clearCanvas() {
  drawingLayer.clear();
  drawingLayer.fill("white");
  drawingLayer.noStroke();
  drawingLayer.square(40,40,320);
}

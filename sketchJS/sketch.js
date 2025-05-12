var flushing= 0;
var jump=0;
var chase=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(175,250,175); //an RGB color for the canvas' background
  //circle
  stroke(53,98,33) // an RGB color for the circle's border
  strokeWeight(3)
  fill(mouseX,mouseY,72,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,25,25); // center of canvas, 20px dia
  fill(227,127,162);
  stroke(135,46,73);
  rect(0,0,flushing, flushing);
  fill(227,146,70);
  stroke(130,93,40);
  triangle(450,75,450,150,mouseX,mouseY);
  stroke(25,25,25)
  line(50,400,400,50);
  fill(mouseX,mouseY,175);
  textSize(50);
  textFont("Comic Sans");
  textStyle(ITALIC);
  text('Hello World',mouseX-125,mouseY-25);
  fill(255,200,200);
  ellipse(jump,chase,25,25); //random location
}



  function mousePressed () {
    if (flushing >= 400) {
      flushing=0;
    } else {
      flushing=flushing+25;
    }
    jump=random (0,500);
    chase=random (0,500);

  }
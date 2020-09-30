var movingrect, fixedrect;





function setup() {
  createCanvas(800,400);
  movingrect = createSprite(300, 200, 50, 50);
  fixedrect = createSprite(200,200,50,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background("black");

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (why(movingrect, fixedrect)) {
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "red";
  }
  else {
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  }

  drawSprites();
}


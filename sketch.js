// Cameron Moore

var canvasWidth = 500;
var canvasHeight = 500;
var midX = canvasWidth/2;       // midpoint X
var midY = canvasHeight/2;      // midpoint Y

var currentChar = 0;    // Activator for different "characters"
var charAmount = 2;

// Color Variables
var red, green, blue;
var deltaR, deltaG, deltaB;

// Char 1 - pulseSquare
var sizeAdd = 0;        // addition value
var sizeSpeed = 0;      // change speed
var sizeAccel = 1;      // acceleration
var maxSpeed = 10;       // angle change maximum
var pulseX, pulseY;
var pulseW, pulseH;

// Char 2 - bouncyBall
var ballRad = 5;
var ballX;
var ballY;
var ballVel;          // Velocity of ball
var ballGrav = 1;     // Change in velocity (simulated gravity)

function setup()
{
  createCanvas(canvasWidth,canvasHeight);
  background(150,150,150);
}

function draw()
{
  background(150,150,150);

  // Starting State
  if (currentChar == 0)
  {
    textSize(20);
    text("Click the canvas to make an object appear.", 50, midY);
  }

  // pulseSquare state
  else if (currentChar == 1)
  {
    sizeAdd += sizeSpeed;
    sizeSpeed += sizeAccel;
    if (sizeAccel > 0 && sizeSpeed > maxSpeed)
    { sizeAccel *= -1;}
    else if (sizeAccel < 0 && sizeSpeed < -maxSpeed)
    { sizeAccel *= -1;}
    pulseSquare(pulseX, pulseY, pulseW, pulseH, red, green, blue, sizeAdd);
  }

  // bouncyBall state
  else if (currentChar == 2)
  {
    ballVel += ballGrav;
    ballY += ballVel;
    if (ballY + ballVel >= canvasHeight - ballRad)
    {
      if (ballVel < 2 && ballVel > -2)
      {
        ballY = canvasHeight - ballRad;
        ballVel = 0
      }
      else
      {
        ballY = canvasHeight - (ballY - (canvasHeight - ballRad));
        ballVel = (ballVel/2) * -1;
      }
    }
    bouncyBall(ballX,ballY,ballRad,red,green,blue);
  }
  /*
  // rainbowWave state
  else if (currentChar == 3)
  {
    if (red >= colorLimit)
    {
      deltaR = -1;
      deltaG = 1;
    }
    if (red == 0 && deltaR == -1)
      {deltaR = 0;}

    if (green >= colorLimit)
    {
      deltaG = -1;
      deltaB = 1;
    }
    if (green == 0 && deltaG == -1)
        {deltaG = 0;}

    if (blue >= colorLimit)
    {
      deltaB = -1;
      deltaR = 1;
    }
    if (blue == 0 && deltaB == -1)
          {deltaB = 0;}
  }
  */
}

function mousePressed()
{
  if (currentChar < charAmount)
  { currentChar++;}
  else
  { currentChar = 1;}

  // pulseSquare initialization
  if (currentChar == 1)
  {
    pulseX = mouseX;
    pulseY = mouseY;
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    pulseW = random(5,100);
    pulseH = random(5,100);
    sizeAccel = random(1,3);
    maxSpeed = random(5,20);
    sizeAdd = 0;
  }

  // bouncyBall initialization
  if (currentChar ==2)
  {
    ballX = mouseX;
    ballY = mouseY;
    ballRad = random(10,50);
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    ballVel = 0;
  }
/*
  // rainbowWave initialization
  if (currentChar == 3)
  {
    sizeAccel = 1;
    maxSpeed = random(5,10);
    sizeAdd = 1;

    r = 25;
    g = 0;
    b = 75;
    deltaR = -1;
    deltaG = 0;
    deltaB = 1;

    rainbowWave = (x,y,sizeAdd,red,green,blue);
  }
  */
}

function pulseSquare(x,y,w,h,r,g,b,animFrame)
{
  fill(r,g,b);
  stroke(0,0,0);
  rectMode(CENTER);
  rect(x,y, w + animFrame, h + animFrame);
}

function bouncyBall(x,y,radius,r,g,b)
{
  fill(r,g,b);
  stroke(0,0,0);
  ellipseMode(RADIUS);
  ellipse(x,y,radius);
}

/*
function rainbowWave(x,y,amp, r,g,b)
{
  stroke(r,g,b);
  line(x, y+amp, x, y-amp);
}
*/

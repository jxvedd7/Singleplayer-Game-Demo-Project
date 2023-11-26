let avoiders1 = [];
let avoiders2 = [];
let avoiders3 = [];
let avoiders4 = [];

let sliders1 = [];
let sliders2 = [];

let pts = 0;
let max = 0;
let ptXSpeed = 12;
let ptYSpeed = 12;
let myXPos = 250;
let myYPos = 250;
let maing; 
let startg; 
let endg; 
let myMusic; 
let point; 
let isPlayer2 = false;
menu = true;
gameOver = false;


function preload()
{
  maing = loadImage('assests/main.png'); 
  startg = loadImage('assests/start.png');  
  endg = loadImage('assests/end.png');
  myMusic = loadSound('assests/Fission.mp3');
  
}

function setup() {
  createCanvas(1000, 750);
  background(8, 12, 15);
  rectMode(CENTER);
  ptXPos = random(0, 750);
  ptYPos = random(0, 750);
  quad1 = 180;
  quad2 = 420;
  quad3 = 335;
  quad4 = 140;
  lineup = 0;
  avoiders1[0] = new avoiderv1();
  myMusic.loop();
}

function draw() {
  if (menu) {
    background(startg);
  }
  else if (gameOver) {
    background(endg)
  }
  else {
    background(maing, 160)
    if (myMusic.isLoaded() && !myMusic.isLooping()) { myMusic.loop(); }
  
    fill(247, 255, 173);
    ellipse(ptXPos, ptYPos, 20);
    ptXPos += ptXSpeed;
    ptYPos += ptYSpeed;
  
    if (ptXPos > 1000 || ptXPos < 0) {
      ptXSpeed *= -1;
    }
    if (ptYPos > 750 || ptYPos < 0) {
      ptYSpeed *= -1;
    }
    
    fill(59, 255, 254);
    if(!isPlayer2) square(mouseX, mouseY, 20);
  
    //collision test
    for (let q = 0; q < avoiders1.length; q++) {
      if (avoiders1[q].display()) {
        for (let w = 0; w < avoiders1.length; w++) 
        {
          ptXPos = random(0, 600);
          ptYPos = random(0, 600);
          pts = 0;
          avoiders1.length = 0;
          avoiders2.length = 0;
          avoiders3.length = 0;
          avoiders4.length = 0;
          sliders1.length = 0;
          sliders2.length = 0;
          gameOver = true;
        }
      }
    }

    for (let e = 0; e < avoiders2.length; e++) {
      if (avoiders2[e].display() == true) {
        for (let r = 0; r < avoiders2.length; r++) 
        {
          ptXPos = random(0, 600);
          ptYPos = random(0, 600);
          pts = 0;
          avoiders1.length = 0;
          avoiders2.length = 0;
          avoiders3.length = 0;
          avoiders4.length = 0;
          sliders1.length = 0;
          sliders2.length = 0;
          gameOver = true;
        }
      }
    }

    for (let o = 0; o < avoiders3.length; o++) {
      if (avoiders3[o].display() == true) {
        for (let p = 0; p < avoiders3.length; p++) 
        {
          ptXPos = random(0, 600);
          ptYPos = random(0, 600);
          pts = 0;
          avoiders1.length = 0;
          avoiders2.length = 0;
          avoiders3.length = 0;
          avoiders4.length = 0;
          sliders1.length = 0;
          sliders2.length = 0;
          gameOver = true;
        }
      }
    }

    for (let a = 0; a < avoiders4.length; a++) {
      if (avoiders4[a].display() == true) {
        for (let s = 0; s < avoiders4.length; s++) 
        {
          ptXPos = random(0, 600);
          ptYPos = random(0, 600);
          pts = 0;
          avoiders1.length = 0;
          avoiders2.length = 0;
          avoiders3.length = 0;
          avoiders4.length = 0;
          sliders1.length = 0;
          sliders2.length = 0;
          gameOver = true;
        }
      }
    }
  
    for (let t = 0; t < sliders1.length; t++) {
      if (sliders1[t].display() == true) {
        for (let y = 0; y < sliders1.length; y++) 
        {
          ptXPos = random(0, 600);
          ptYPos = random(0, 600);
          pts = 0;
          avoiders1.length = 0;
          avoiders2.length = 0;
          avoiders3.length = 0;
          avoiders4.length = 0;
          sliders1.length = 0;
          sliders2.length = 0;
          gameOver = true;
        }
      }
    }

    for (let u = 0; u < sliders2.length; u++) {
      if (sliders2[u].display() == true) {
        for (let i = 0; i < sliders2.length; i++) 
        {
          ptXPos = random(0, 600);
          ptYPos = random(0, 600);
          pts = 0;
          avoiders1.length = 0;
          avoiders2.length = 0;
          avoiders3.length = 0;
          avoiders4.length = 0;
          sliders1.length = 0;
          sliders2.length = 0;
          gameOver = true;
        }
      }
    }
  
    let grab = dist(mouseX, mouseY, ptXPos, ptYPos);
    let grab2 = dist(myXPos, myYPos, ptXPos, ptYPos);
    if ((grab < 20 && !isPlayer2) || (grab2 < 20 && isPlayer2)) 
    {
      ptXPos = random(0, 600);
      ptYPos = random(0, 600);
      pts += 1;
      if (pts % 15 == 0) 
      {
        avoiders1[avoiders1.length] = new avoiderv1(25);  
      }
      if (pts % 30 == 0) 
      {
        avoiders1[avoiders1.length] = new avoiderv1(100);  
      }
      if (pts % 7 == 0) 
      {
        avoiders2[avoiders2.length] = new avoiderv2(15);  
      }
      if (pts % 9 == 0) 
      {
        avoiders2[avoiders2.length] = new avoiderv2(150);  
      }
      if (pts % 5 == 0 && pts <= 40) 
      {
        avoiders3[avoiders3.length] = new avoiderv3(0);
        avoiders3[avoiders3.length] = new avoiderv3(100);
        avoiders3[avoiders3.length] = new avoiderv3(200);
        avoiders3[avoiders3.length] = new avoiderv3(300);
        avoiders3[avoiders3.length] = new avoiderv3(400);
        avoiders3[avoiders3.length] = new avoiderv3(500);
        avoiders3[avoiders3.length] = new avoiderv3(600);
        avoiders3[avoiders3.length] = new avoiderv3(700);
        avoiders3[avoiders3.length] = new avoiderv3(800);
        avoiders3[avoiders3.length] = new avoiderv3(900);
        avoiders3[avoiders3.length] = new avoiderv3(1000);
      }
      if (pts % 5 == 0 && pts >= 40) 
      {
        avoiders4[avoiders4.length] = new avoiderv4(0);
        avoiders4[avoiders4.length] = new avoiderv4(100);
        avoiders4[avoiders4.length] = new avoiderv4(200);
        avoiders4[avoiders4.length] = new avoiderv4(300);
        avoiders4[avoiders4.length] = new avoiderv4(400);
        avoiders4[avoiders4.length] = new avoiderv4(500);
        avoiders4[avoiders4.length] = new avoiderv4(600);
        avoiders4[avoiders4.length] = new avoiderv4(700);
        avoiders4[avoiders4.length] = new avoiderv4(800);
        avoiders4[avoiders4.length] = new avoiderv4(900);
        avoiders4[avoiders4.length] = new avoiderv4(1000);
      }
      if (pts % 4 == 0 && pts <= 40) 
      {
        sliders1[sliders1.length] = new sliderv1(0);  
      }
      if (pts % 5 == 0 && pts <= 40) 
      {
        sliders1[sliders1.length] = new sliderv1(750);  
      }
      if (pts % 4 == 0 && pts >= 40) 
      {
        sliders2[sliders2.length] = new sliderv2(0);  
      }
      if (pts % 5 == 0 && pts >= 40) 
      {
        sliders2[sliders2.length] = new sliderv2(750);  
      }

    }
  
    if(keyIsDown(32)) 
    {
      if(!isPlayer2) isPlayer2 = true;
      else isPlayer2 = false;
    }
  
    if (isPlayer2) 
    {
      drawPlayer();
    }
    
    if (pts > max) {
      max = pts;
    }
  
    fill(59, 255, 254);
    textSize(25);
    textFont('Georgia');
    text("Current: " + pts, 10, 30);
  
    fill(247, 255, 173);
    textSize(25);
    textFont('Georgia');
    text("Highest: " + max, 10, 60);
  
    fill(255, 154, 71);
    textSize(25);
    textFont('Georgia');
    text("Switch (space)", 10, 90);
  }
}

function keyPressed() {
  if (keyIsDown(ENTER)) {
    if (menu) { menu = false; }
    else { menu = true;}

    if (gameOver) { gameOver = false;}
  }
}

function drawPlayer() 
{
  fill(255, 154, 71);
  square(myXPos, myYPos, 20);
  if (keyIsDown(65)) {
    myXPos -= 15;
  }
  if (keyIsDown(68)) {
    myXPos += 15;
  }
  if (keyIsDown(87)) {
    myYPos -= 15;
  }
  if (keyIsDown(83)) {
    myYPos += 15;
  }

  if (myXPos < 0) { myXPos = 0; }
  if (myXPos > 1000) { myXPos = 1000; }
  if (myYPos < 0) { myYPos = 0; }
  if (myYPos > 750) { myYPos = 750; }
}

class avoiderv1
{
  constructor(s) {
    this.size = s; 
    this.XPos = 75;
    this.YPos = 75;
    this.XSpeed = 0; this.YSpeed = 0;

    while ((this.XSpeed < 10 && this.XSpeed > -10) || (this.YSpeed < 10 && this.YSpeed > -10)) {
      this.XSpeed = random(-10, 15);
      this.YSpeed = random(-10, 15);
    }
  }

  display() {
    fill(252, 57, 111);
    ellipse(this.XPos, this.YPos, this.size, this.size);
    this.XPos += this.XSpeed;
    this.YPos += this.YSpeed;

    if (this.XPos > 1000 || this.XPos < 0) {
      this.XSpeed *= -1;
    }
    if (this.YPos > 750 || this.YPos < 0) {
      this.YSpeed *= -1;
    }

    let collide1 = dist(mouseX, mouseY, this.XPos, this.YPos);
    let collide2 = dist(myXPos, myYPos, this.XPos, this.YPos);
    if ((collide1 < (10 + (this.size / 2)) && !isPlayer2) || (collide2 < (10 + (this.size / 2)) && isPlayer2))
    {
      return true;
    }
    return false;
  }

}

class avoiderv2
{
  constructor(s) {
    this.size = s; 
    this.XPos = 75;
    this.YPos = 75;
    this.XSpeed = 0; this.YSpeed = 0;

    while ((this.XSpeed < 10 && this.XSpeed > -10) || (this.YSpeed < 10 && this.YSpeed > -10)) {
      this.XSpeed = random(-10, 15);
      this.YSpeed = random(-10, 15);
    }
  }

  display() {
    fill(252, 57, 111);
    ellipse(this.XPos, this.YPos, this.size, this.size);
    this.XPos += this.XSpeed;
    this.YPos += this.YSpeed;

    let collide1 = dist(mouseX, mouseY, this.XPos, this.YPos);
    let collide2 = dist(myXPos, myYPos, this.XPos, this.YPos);
    if ((collide1 < (10 + (this.size / 2)) && !isPlayer2) || (collide2 < (10 + (this.size / 2)) && isPlayer2))
    {
      return true;
    }
    return false;
  }

}

class avoiderv3
{
  constructor(x) {
    this.size = 20; 
    this.XPos = x;
    this.YPos = 0;
    this.XSpeed = 0; this.YSpeed = 0;
  }

  display() {
    fill(252, 57, 111);
    ellipse(this.XPos, this.YPos, this.size, this.size);
    this.YPos += 10;

    let collide1 = dist(mouseX, mouseY, this.XPos, this.YPos);
    let collide2 = dist(myXPos, myYPos, this.XPos, this.YPos);
    if ((collide1 < (10 + (this.size / 2)) && !isPlayer2) || (collide2 < (10 + (this.size / 2)) && isPlayer2))
    {
      return true;
    }
    return false;
  }

}

class avoiderv4
{
  constructor(x) {
    this.size = 20; 
    this.XPos = x;
    this.YPos = 1000;
    this.XSpeed = 0; this.YSpeed = 0;
  }

  display() {
    fill(252, 57, 111);
    ellipse(this.XPos, this.YPos, this.size, this.size);
    this.YPos -= 10;

    let collide1 = dist(mouseX, mouseY, this.XPos, this.YPos);
    let collide2 = dist(myXPos, myYPos, this.XPos, this.YPos);
    if ((collide1 < (10 + (this.size / 2)) && !isPlayer2) || (collide2 < (10 + (this.size / 2)) && isPlayer2))
    {
      return true;
    }
    return false;
  }
}

class sliderv1
{
  constructor(y) 
  {
    this.XPos = 0;
    this.YPos = y;
    this.w = 20;
    this.h = 500;
  }

  display() 
  {
    fill(252, 57, 111);
    rect(this.XPos, this.YPos, this.w, this.h);
    this.XPos += 10;
    
    if(!isPlayer2 && mouseX<this.XPos+this.w/2 && mouseX>this.XPos-this.w/2 && mouseY<this.YPos+this.h/2 && mouseY>this.YPos-this.h/2)
    {
      return true;
    }
    if(isPlayer2 && myXPos<this.XPos+this.w/2 && myXPos>this.XPos-this.w/2 && myYPos<this.YPos+this.h/2 && myYPos>this.YPos-this.h/2)
    {
      return true;
    }
    return false;
  }
}

class sliderv2
{
  constructor(y) 
  {
    this.XPos = 1000;
    this.YPos = y;
    this.w = 20;
    this.h = 500;
  }

  display() 
  {
    fill(252, 57, 111);
    rect(this.XPos, this.YPos, this.w, this.h);
    this.XPos -= 10;
    if(!isPlayer2 && mouseX<this.XPos+this.w/2 && mouseX>this.XPos-this.w/2 && mouseY<this.YPos+this.h/2 && mouseY>this.YPos-this.h/2)
    {
      return true;
    }
    if(isPlayer2 && myXPos<this.XPos+this.w/2 && myXPos>this.XPos-this.w/2 && myYPos<this.YPos+this.h/2 && myYPos>this.YPos-this.h/2)
    {
      return true;
    }
    return false;
  }
}

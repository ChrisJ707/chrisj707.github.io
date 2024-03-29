var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('kirby.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://chrisj707.github.io/diyps2022/notes.png');
  img2 = loadImage('https://chrisj707.github.io/diyps2022/error.jpg');
  img3 = loadImage('https://chrisj707.github.io/diyps2022/painter.png');
  img4 = loadImage('https://chrisj707.github.io/diyps2022/warning.png');
  img5 = loadImage('https://chrisj707.github.io/diyps2022/pointer.png');
  img6 = loadImage('https://chrisj707.github.io/diyps2022/hand.png');
  img7 = loadImage('https://chrisj707.github.io/diyps2022/start.png');
  img8 = loadImage('https://chrisj707.github.io/diyps2022/vwindow.png');
  img9 = loadImage('https://chrisj707.github.io/diyps2022/pusheen.png');
  img10 = loadImage('https://chrisj707.github.io/diyps2022/explosion.png');
  img11 = loadImage('https://chrisj707.github.io/diyps2022/stick.png');
  img12 = loadImage('https://chrisj707.github.io/diyps2022/hearteyed.png');
  img13 = loadImage('https://chrisj707.github.io/diyps2022/sleep.png');
  img14 = loadImage('https://chrisj707.github.io/diyps2022/fire.png');
  img15 = loadImage('https://chrisj707.github.io/diyps2022/kirby.png');
  img16 = loadImage('https://chrisj707.github.io/diyps2022/mariojump.png');
  img17 = loadImage('https://chrisj707.github.io/diyps2022/star.png');
  img18 = loadImage('https://chrisj707.github.io/diyps2022/pikachu.png');
  img19 = loadImage('https://chrisj707.github.io/diyps2022/cloud1.png');
  img20 = loadImage('https://chrisj707.github.io/diyps2022/catcry.png');
}

function setup() {
createCanvas(650, 600);  // canvas size
background(255,255, 255);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
   //Hotkey 1
    image(img, mouseX, mouseY, 180, 180);
  } else if (toolChoice == '2') { // second tool
   
    //Hotkey 2
    image(img2, mouseX, mouseY, 140, 80);
  } else if (toolChoice == '3') { // third tool

    //Hotkey 3
    image(img3, mouseX, mouseY, 260, 264);
  } else if (toolChoice == '4') {

    //Hotkey 4
    image(img4, mouseX, mouseY, 140, 80);
  } else if (key == '5') { // this tool calls a function
  
    //Hotkey 5
    image(img5, mouseX, mouseY, 20, 23);
  } else if (toolChoice == '6') {

    //Hotkey 6
    image(img6, mouseX, mouseY, 20, 23);
  } else if (toolChoice == '7') {

    //Hotkey 7
    image(img7, mouseX, mouseY, 130, 50);
  } else if (toolChoice == '8') {

    //Hotkey 8
    image(img8, mouseX, mouseY, 320, 300);
  } else if (toolChoice == '9') {

    //Hotkey 9
    image(img9, mouseX, mouseY, 80, 80);    
  } else if (toolChoice == '0') {
    
    //Hotkey 0
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 650, 600);
    
    
  } else if (toolChoice == '-' || toolChoice == '-') { // g places the image we pre-loaded
    image(img10, mouseX, mouseY, 80, 80);
       blendMode(OVERLAY);
    
  } else if (toolChoice == '=' || toolChoice == '=') { // g places the image we pre-loaded
    image(img11, mouseX, mouseY, 140, 80);
    
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // g places the image we pre-loaded
    image(img12, mouseX, mouseY, 70, 70);
    
  } else if (toolChoice == 'w' || toolChoice == 'W') { // g places the image we pre-loaded
    image(img13, mouseX, mouseY, 80, 80);
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // g places the image we pre-loaded
    image(img14, mouseX, mouseY, 90, 80);
    
  } else if (toolChoice == 'r' || toolChoice == 'R') { // g places the image we pre-loaded
    image(img15, mouseX, mouseY, 90, 80);
  
  } else if (toolChoice == 't' || toolChoice == 'T') { // g places the image we pre-loaded
    image(img16, mouseX, mouseY, 100, 80);
  
  } else if (toolChoice == 'y' || toolChoice == 'Y') { // g places the image we pre-loaded
    image(img17, mouseX, mouseY, 100, 80);
    
  } else if (toolChoice == 'u' || toolChoice == 'U') { // g places the image we pre-loaded
    image(img18, mouseX, mouseY, 140, 80);
    
  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    image(img19, mouseX, mouseY, 140, 80);
    
  } else if (toolChoice == 'o' || toolChoice == 'O') { // g places the image we pre-loaded
    image(img20, mouseX, mouseY, 140, 100);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

function setup() {
  createCanvas(400, 300);
}
 
function draw() {
  clear();
  textSize(18);
  fill("black");
  text("Press any key to see its keyCode", 60, 20);
  text("The name of the key pressed", 70, 60);
 
  textSize(52);
  fill("red");
 
  // Show the key that is recently pressed
  text(key, 170, 120);
  textSize(18);
  fill("black");
   
  text("The keyCode of the key pressed", 60, 160);
  textSize(52);
  fill("red");
 
  // Show the key code of the key that is
  // recently pressed
  text(keyCode, 160, 220);
}
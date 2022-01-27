let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;

//Function to set up canvas with color boxes
function setup() {
	createCanvas(1000, 1000);
	background(255);
	currentColor = 0;
	red = new colorBox(0, "red");
	orange = new colorBox(20, "orange");
	yellow = new colorBox(40, "yellow");
	green = new colorBox(60, "green");
	cyan = new colorBox(80, "cyan");
	blue = new colorBox(100, "blue");
	magenta = new colorBox(120, "magenta");
	brown = new colorBox(140, "brown");
	white = new colorBox(160, "white");
	black = new colorBox(180, "black");
}

//Function to determine based on mouse position how to interact with the Program
function draw(){
	if(mouseIsPressed){
		if(mouseX > 21){ //Not selecting color, call drawing function to draw
			drawing();
		}//else we are selecting color, make boxes appear and choose
	}
	red.appear();
	//I don't know why, but it won't let me select colors unless I have
	//one single "onMousePressed" call... and it works for all colors
	red.onMousePressed();
	orange.appear();
	yellow.appear();
	green.appear();
	cyan.appear();
	blue.appear();
	magenta.appear();
	brown.appear();
	white.appear();
	black.appear();
}

//Building a class to define my colorBox objects, and position them
class colorBox{
	constructor(y, color){
		this.x = 0;
		this.y = y;
		this.w = 20;
		this.h = 20;
		this.color = color;
	}
	//Method in draw function to make boxes show up
	appear(){
		push();
		fill(this.color);
		rect(this.x,this.y,this.w,this.h);
		pop();
	}
	//Method in Draw function to determine what to do with mouse
	onMousePressed(){ //If mouse is in color selector zone, it won't draw
		if(mouseIsPressed){
			if(mouseX < 20){	//Selecting color based on Y position
				if(mouseY > 0 && mouseY < 20){currentColor = "red";}
				else if(mouseY > 20 && mouseY < 40){currentColor="orange";}
				else if(mouseY > 40 && mouseY < 60){currentColor="yellow";}
				else if(mouseY > 60 && mouseY < 80){currentColor="green";}
				else if(mouseY > 80 && mouseY < 100){currentColor="cyan";}
				else if(mouseY > 100 && mouseY < 120){currentColor="blue";}
				else if(mouseY > 120 && mouseY < 140){currentColor="magenta";}
				else if(mouseY > 140 && mouseY < 160){currentColor="brown";}
				else if(mouseY > 160 && mouseY < 180){currentColor="white";}
				else if(mouseY > 180 && mouseY < 200){currentColor="black";}
			}
		}
	}
}

//Function to draw, set pencil width, and to draw at mouse position.
function drawing(){
	push();
	stroke(currentColor);
	strokeWeight(5 );
	line(pmouseX,pmouseY,mouseX,mouseY);
	pop();
}

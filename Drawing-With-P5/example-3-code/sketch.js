function setup() {
	createCanvas(400, 400);
	// put setup code here
}

function draw() {
	background(0,0,0);

	//pacman body
	fill(255,255,0);
	ellipse(100,200,100,100);
	//pacman mouth
	fill(0,0,0);
	//triangle(x-coord 1st point,y-coord 1st point,x-coord 2nd point,y-coord 2nd point,x-coord 3rd point,y-coord 3rd point)
	triangle(100,200,25,100,50,250);

	//ghost body
	fill(255,0,0);
	//rect(x-coord, y-coord, width, height,top-left radii, top-right radii, bottom left radii, bottom right radii)
	rect(225,150,100,100,50,50,0,0);

	//ghost eye left
	fill(255,255,255);
	ellipse(253,195,28,28);
	fill(0,0,255);
	ellipse(253,195,18,18);

	//ghost eye right
	fill(255,255,255);
	ellipse(295,195,28,28);
	fill(0,0,255);
	ellipse(295,195,18,18);
}

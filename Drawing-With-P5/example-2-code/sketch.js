function setup() {
	createCanvas(400, 400);
	// put setup code here
}

function draw() {
	background(255,255,255);
	colorMode(RGB,100); //Picking color pallette to blend venn diagram

	//Red Circle
	fill(100,0,0,50);
	ellipse(250,100,130);
	//Green Circle
	fill(0,100,0,50);
	ellipse(300,170,130);
	//Blue Circle
	fill(0,0,100,50);
	ellipse(210,170,130);

}

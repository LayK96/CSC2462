function setup() {
	createCanvas(400, 400);
	// put setup code here
}

function draw() {
	background(0,0,255);

	//green circle with white outline
	fill(0,153,0);
  stroke(255,255,255);
  strokeWeight(3);
  ellipse(215,215,225,225);

	//Custom making a red star with white outline by using beginShape() and manually assigning vertexes to connect it.
  fill(255,0,0)
  beginShape();
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);

}

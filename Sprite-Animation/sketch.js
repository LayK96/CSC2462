var spelunk;

function setup(){
    createCanvas(800,400);

    //create a sprite and add 3 animations
    spelunk = createSprite(80,80,80,80);

    //label each frame, then add to an animation for walking
    var myAnimation = spelunk.addAnimation('standing','assets/man_stand01.png');

    //offC and offY is the distance of animation from the center of sprite
    //I have to play around to make sure they stay the centered, even with different heights
    myAnimation.offY=18;

    spelunk.addAnimation('walking','assets/man_walk01.png','assets/man_walk02.png','assets/man_walk03.png','assets/man_walk04.png','assets/man_walk05.png','assets/man_walk06.png','assets/man_walk07.png','assets/man_walk08.png');


}

function draw(){
    background(255,255,255);

    //if mouse is to the left
    if(mouseX < spelunk.position.x - 10) {
        spelunk.changeAnimation('moving');
        //flip horizontally
        spelunk.mirrorX(-1);
        //negative x velocity: move left
        spelunk.velocity.x = -2;
      }
      else if(mouseX > spelunk.position.x + 10) {
        spelunk.changeAnimation('moving');
        //unflip
        spelunk.mirrorX(1);
        spelunk.velocity.x = 2;
      }
      else {
        //if close to the mouse, don't move
        spelunk.changeAnimation('floating');
        spelunk.velocity.x = 0;
      }
    
      if(mouseIsPressed) {
        //the rotation is not part of the spinning animation
        spelunk.rotation -= 10;
        spelunk.changeAnimation('spinning');
      }
      else
        spelunk.rotation = 0;
    
      //up and down keys to change the scale
      //note that scaling the image quality deteriorates
      //and scaling to a negative value flips the image
      if(keyIsDown(UP_ARROW))
      spelunk.scale += 0.05;
      if(keyIsDown(DOWN_ARROW))
      spelunk.scale -= 0.05;
    
      //draw the sprite
      drawSprites();
}
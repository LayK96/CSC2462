var spelunk;
var eskimo;
var bg;

function setup(){
    createCanvas(800,400);

    //For Bonus/fun I am gonna add background for my sprites to walk on
    bg = loadImage('assets/combo.png');

    //create 2 sprites and add 3 animations
    spelunk = createSprite(80,125,80,80);
    eskimo = createSprite(80,320,80,80);

    //label each frame, then add to an animation for walking
    var myAnimation = spelunk.addAnimation('standing','assets/man_stand01.png');
    var myAnimation2 = eskimo.addAnimation('eskimo_standing','assets/eskimo_stand01.png');

    //offC and offY is the distance of animation from the center of sprite
    //I have to play around to make sure they stay the centered, even with different heights
    myAnimation.offY=4;
    myAnimation2.offY=4;

    spelunk.addAnimation('walking','assets/man_walk01.png','assets/man_walk02.png','assets/man_walk03.png','assets/man_walk04.png','assets/man_walk05.png','assets/man_walk06.png','assets/man_walk07.png','assets/man_walk08.png');
    //spelunk.addAnimation('crawling_down','assets/man_crawl01.png','assets/man_crawl02.png');
    spelunk.addAnimation('crawling','assets/man_crawl02.png','assets/man_crawl03.png','assets/man_crawl04.png');
    //spelunk.addAnimation('crawling_up','assets/man_crawl02.png','assets/man_crawl01.png');
    
    eskimo.addAnimation('eskimo_walking','assets/eskimo_walk01.png','assets/eskimo_walk02.png','assets/eskimo_walk03.png','assets/eskimo_walk04.png','assets/eskimo_walk05.png','assets/eskimo_walk06.png','assets/eskimo_walk07.png','assets/eskimo_walk08.png');
    //spelunk.addAnimation('crawling_down','assets/man_crawl01.png','assets/man_crawl02.png');
    eskimo.addAnimation('eskimo_crawling','assets/eskimo_crawl02.png','assets/eskimo_crawl03.png','assets/eskimo_crawl04.png');
    //spelunk.addAnimation('crawling_up','assets/man_crawl02.png','assets/man_crawl01.png');


}

function draw(){
    background(bg);

    //If "a" key is pressed, move left
    if(keyIsDown(65)) {
        //If Pressing "Left-Shift" key, then crawl while moving same direction
        if(keyIsDown(16)){
          spelunk.changeAnimation('crawling');
          eskimo.changeAnimation('eskimo_crawling');
        }
        //Not Pressing Shift key, just do normal walk
        else{
          spelunk.changeAnimation('walking');
          eskimo.changeAnimation('eskimo_walking');
          //flip horizontally
          spelunk.mirrorX(-1);
          eskimo.mirrorX(-1);
          //negative x velocity: move left
          spelunk.velocity.x = -2;
          eskimo.velocity.x = -2;
        }
      }
      //If "d" key is pressed, move right
     else if(keyIsDown(68)) {
       //If Pressing "Left-Shift" key, then crawl while moving same direction
       if(keyIsDown(16)){
        spelunk.changeAnimation('crawling');
        eskimo.changeAnimation('eskimo_crawling');
       }
       //Not Pressing Shift key, just do normal walk
       else{
          spelunk.changeAnimation('walking');
          eskimo.changeAnimation('eskimo_walking');
          //unflip
          spelunk.mirrorX(1);
          spelunk.velocity.x = 2;
          eskimo.mirrorX(1);
          eskimo.velocity.x = 2;
       }
      }
    else {
        //if close to the mouse, don't move
        spelunk.changeAnimation('standing');
        spelunk.velocity.x = 0;
        eskimo.changeAnimation('eskimo_standing');
        eskimo.velocity.x = 0;

      }
    

    
      //draw the sprite
      drawSprites();
}
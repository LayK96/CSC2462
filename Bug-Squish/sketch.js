//First lets create some global variable for animations of the bugs being squished
let bugAnimation;
let bugAnimation2;
let bugAnimation3;
let bugAnimation4;

//Now lets create variables to load in our sprite sheet
let bugSpriteSheet;
let bugSquashSpriteSheet;

//setting up canvas background
let canvas;
let bugClicked = true;

//rules of the game
let score = 0;
let startTime = 30;
let clock;
let clockEnds;
let gameState;
let startGame;
let restartGame;

//variables for bug objects
let velocity=3;
let endCount;

//preloading our sprite sheets in an array
let sprites = ["assets/bug.png", "assets/squishedBug.png"];

//preload all of the objects and create variables for them
function preload(){
    bugSpriteSheet = loadSpriteSheet(sprites[0],16,16,5);
    bugSquashSpriteSheet = loadSpriteSheet(sprites[1],16,16,1);

    bugAnimation = loadAnimation(bugSpriteSheet);
    bugAnimation2 = loadSpriteSheet(sprites[0],16,16,4);
    bugAnimation3 = loadSpriteSheet(sprites[0],16,16,3);
    bugAnimation3 = loadSpriteSheet(sprites[0],16,16,2);
    squishAnimation = loadAnimation(bugSquashSpriteSheet);
}

//Set up canvas
function setup(){
    clear();
    canvas = createCanvas(windowWidth,windowHeight);
    clockEnds = false;
    //putting a button to begin game in middle of screen
    startGame= createButton("BEGIN!!");
    startGame.position(width/2,height/2);
    //setting up button to restart game
    restartGame = createButton("restart");
    restartGame.position(width/2,height/2);
    //Setting up restart button to change the game state
    restartGame.mousePressed(()=> {
        restartGame.remove();
        gameState = "start";
        setup();
    });
    restartGame.hide();
    gameState = "start";
    velocity =3;
    bugs = new Group();
    makeBugs();
}

//Time to Draw the game which we will interact with
function draw(){
    background =("lightblue");
    //If game state is set to play
    if(gameState == "play"){
        clock();
        startGame.hide();
        text("Score: " + score , 10 ,15);   //Show score in top left
        text(30-startTime(),10,60);         //Show countdown
        //loop to run the game
        for(let i = 0; i < bugs.length; i++){
            let c = bugs[i];
            if (c.position.x >=width - c.width / 2){
                c.velocity.x = -velocity;
                c.rotation = -90;
            }
            else if(c.position.x <= 0 + c.width/2){
                c.velocity.x=velocity;
                c.rotation = 90;
            }
            else if(c.position.y >= height -c.height /2){
                c.velocity.y = -velocity;
                c.rotation =0;
            }
            else if(c.position.y <= height +c.height /2){
                c.velocity.y = velocity;
                c.rotation = 180;
            }
        }
        //When you run out of time
        if(clockIsDone == true){
            gameState= "end";
        }
        drawSprites(bug);
    //game state is set to start
     } 
     else if( gameState == "start"){
        endCount = 0;
        startGame.mousePressed(() => {
            gameStart = "play";
            startTime = millis();
        });
     }
     else if(gameState == "end"){
            restartGame.show();
            bugs.removeSprites();
            sequence.stop();
            textSize(40);
            text("Score: " + score, 300,300);
        }
    }

    //Function to make some bugs to go around screen
    function makeBugs(){
        for(let i = 0;i < 50; i++){
            let newBug = createSprite(random(windowWidth),random(windowHeight), 16);
            if(i % 5 == 0){
                newBug.addAnimation("crawl", bugAnimation);
                newBug.setSpeed(random(velocity),0);
                newBug.rotation = 90;
            }
            else if(i % 2 == 0){
                newBug.addAnimation("crawl", bugAnimation2);
                newBug.setSpeed(random(velocity),90);
                newBug.rotation = 180;
            }
            else if(i % 3 == 0){
                newBug.addAnimation("crawl", bugAnimation3);
                newBug.setSpeed(random(velocity),180);
                newBug.rotation = -90;
            }
            else{
                newBug.addAnimation("crawl", bugAnimation4);
                newBug.setSpeed(random(velocity),270);
                newBug.rotation = -180;
            }
            //set our squish animation
            newBug.addAnimation("squish", squishAnimation);
            newBug.scale=3;
            newBug.mouseActive = true;
            newBug.setDefaultCollider();

            newBug.addToGroup(bugs);

            newBug.onMouseReleased = () => {
                newBug.changeAnimation("squish");
                bugClicked = true;
                newBug.velocity.x = 0;
                newBug.velocity.y = 0;
                if(newBug.isSquish == false){
                    newBug.isSquish = true;
                    score++;
                    velocity = velocity + .3;
                }
            };
        }
    }

    //Function for our clock
    function timer(){
        clock = int((millis() - startTime) / 1000);
        if(time > 30) {
            timerIsDOne=true;
        }
        return clock;
    }


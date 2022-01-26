var sprite_sheet_image;
var sprite_sheet;
var sprite_animation;

//This functions loads assets for sprites
function preload(){
    //Specify width and height of each frame and number of Frames
    sprite_sheet = loadSpriteSheet('assets/Spelunky_Guy.png',80,80,80);
    sprite_animation=loadAnimation(sprite_sheet);

    //Load the full sprite sheet on the side for reference
    sprite_sheet_image = laodImage('assets/spelunky_guy.png');
}

function setup(){
    createCanvas(800,400);
}

function draw(){
    clearInterval();

    //animate the sprite sheet
    animation(sprite_animation,100,130);

    //show sample image
    image(sprite_sheet_image, 250,40,500,154);
}
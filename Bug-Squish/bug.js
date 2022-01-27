function Bug(x, type){

    this.pos = createVector(x,0);
    this.off = random(50);

    this.type = type; // 0 = ant, 1 = big ant

    this.r = 20;
}

Bug.prototype.draw = function(){
    //insert sprite later
    stroke(255);
    strokeWeight(3);

    fill(this.type == 0 ? "#00FFFF" : "#FF4444");
    ellipse(this.pos.x,this.pos.y,this.r);
}

Bug.prototype.update= function(){
    //insert sprite later
    this.pos.y += speed;

    this.pos.x = cos(this.pos.y) * width;
}
class Tree{
    constructor(x,y){
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,400,500,options);
        World.add(world,this.body);
        
        this.image = loadImage("Plucking mangoes/tree.png");
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 400, 500);
        pop();
    }
}
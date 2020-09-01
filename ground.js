class Ground{
    constructor(x,y){
        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,800,30,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 800, 30);
        pop();
    }
}
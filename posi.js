class Posit{
    
    constructor(x,y){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, 80, 30, options);
        this.width = 80;
        this.height = 40;

        World.add(world, this.body);

    }
    display(){

        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x, this.body.position.y, this.width, this.height)

    }

}
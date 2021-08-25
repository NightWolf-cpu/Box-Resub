class Stone{
    
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body)

    }
    display(){
        push()
        var pos=this.body.position;
        var angle=this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0, this.r)
        pop();
    }
    
}
class paper{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }

        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.image=loadImage("paper.png")

        World.add(world,this.body)
    }
    display(){
        var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			fill("black")
			rect(0,0,this.w, this.h);
			pop()
    }
}
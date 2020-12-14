class dustbin{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push ();
        translate (pos.x,pos.y);
        fill ("white");
        rectMode(CENTER);
       rect(0,0,this.w,this.h)
       pop ();
    }
}
class Boy{
constructor(x,y,width,height){
var options = {
isStatic :true,
}
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x,y,this.width, this.height, options);
this.image = loadImage("sprites/boy.png")
World.add(world, this.body)
}
display(){
var pos = this.body.position;
push()
translate(pos.x, pos.y)
imageMode(CENTER)
image(this.image,0, 0,100,200 )
pop();
}
}
class Paper{
    constructor(x,y,width,heigth){
        var options={
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.5
        }
        this.body = Bodies.rectangle(x, y, width,heigth, options);
        this.image = loadImage('paper.png');
        this.width = width
        this.heigth = height

        World.add(world,this.body); 
    }
    display(){
        //ellipseMode(RADIUS);
        image(this.image,70,610,70,70);
        rect(this.body.position.x, this.body.position.y, this.width, this.heigth);
    }    
}
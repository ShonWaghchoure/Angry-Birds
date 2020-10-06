class Bird extends Base{

    constructor(x,y){
        super(x,y,100,100);
        this.image = loadImage("images/bird.png");

    }

    display(){

        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        super.display();
    }
}
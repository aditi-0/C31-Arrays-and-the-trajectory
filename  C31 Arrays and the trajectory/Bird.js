class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if (this.body.position.x>200&&this.body.velocity.x>10){
    var position = [this.body.position.x, this.body.position.y];    //only when the bird is moving
    this.trajectory.push(position);
    }
    //  [ trajectory [position] ]

    //for(start? ; stop? ; repeated?)   --> 3 conditions
    //start --> bird is on the slingshot
    //stop --> after the bird has fallen
    //repeat --> same smoke image continuously behind the bird
//(6)[a,b,c,d,e,f]
    for(var i = 0; i<this.trajectory.length; i++  ){
      //image(name,x,y)
        image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}

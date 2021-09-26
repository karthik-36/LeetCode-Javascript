console.log("running classes");

class Bubble{

    constructor(x,y){
      this.x = x? x : 100;
      this.y = y? y : 200;
    }

    show(){
        console.log(this.x , this.y);
    }

    add(){
        return this.x + this.y;
    }

    moveX(){
        this.x = this.x + 10;
    }

}

let b1 = new Bubble(500,800);
b1.show();
console.log(b1.add());

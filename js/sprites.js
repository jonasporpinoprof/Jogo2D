const gravity = 0.6;

class Sprite {
    constructor({position, velocity, dimensions}){
        this.position = position;
        this.velocity = velocity;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }

    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.draw();
    }
}

const player = new Sprite({
    position: {
        x: 100,
        y: 100
    },
    velocity:{
        x: 2,
        y: 0
    },
    dimensions: {
        width:50,
        heignt: 150
    }
});
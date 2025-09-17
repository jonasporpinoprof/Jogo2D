class Sprite {
    constructor({position, dimensions}){
        this.position = position;
        this.width = dimensions.width;
        this.heignt = dimensions.heignt;
    }

    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.heignt);
    }
}

const player = new Sprite({
    position: {
        x: 100,
        y: 100
    },
    dimensions: {
        width:50,
        heignt: 150
    }
});
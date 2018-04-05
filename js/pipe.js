class Pipes {
    constructor(x,y,img,state) {
        this.x = x
        this.y = y
        this.v = 0
        this.img = img
        this.state = state
    }
    update() {
        this.x -= 1
        if (this.x == -52) {
            this.x = 300
            score+=0.5
            if (this.state == 0) {
                this.y = rand()
            }else{
                this.y = rand()+500
            }
        }
    }
}

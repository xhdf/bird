class Pipes {
    constructor(x,y,img,state) {
        this.x = x
        this.y = y
        this.v = 0
        this.img = img
        this.state = state
        this.gamescore=0
    }
    update() {
        var score = document.querySelector(".score")
        this.x -= 1
        if (this.x == -52) {
            this.x = 300
            this.gamescore += 1
            score.innerHTML = this.gamescore
            if (this.state == 0) {
                this.y = rand()
            }else{
                this.y = rand()+500
            }
        }
    }
}

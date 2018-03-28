class Land{
    constructor(){
        this.x=0
        this.y=452
        this.v=5
        this.interval=0
        this.img=imageFromPath('img/land.png')
    }
    move(){
        this.x-=5
        if(this.x<-276){
            this.x=0
        }
    }
    update(){
        this.move()
    }
}
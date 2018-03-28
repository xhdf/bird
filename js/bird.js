class Bird{
    constructor(){
        this.x= 30
        this.y= 280
        this.v= 0
        this.g= 0.2
        this.img= imageFromPath('img/bird0_0.png')
        this.imgIndex= 0
        this.interval= 1
        this.rotation=0
    }
    scb(){
        this.interval++
        if (this.interval === 10) {
            this.interval = 0
            if (this.imgIndex === 0) {
                this.img = imageFromPath('img/bird0_1.png')
                this.imgIndex = 1
            } else if (this.imgIndex === 1) {
                this.img = imageFromPath('img/bird0_2.png')
                this.imgIndex = 2
            } else if (this.imgIndex === 2) {
                this.img = imageFromPath('img/bird0_0.png')
                this.imgIndex = 0
            }
        }
    }
    xl(){
        this.v = this.v + this.g
        this.y = this.y + this.v
        if(this.y>400||this.y<0){
            this.y=430
        }
    }
    rotate(){
        ctx.save();
        this.rotation++
        var x1 = c.width/2; //画布宽度的一半
        var y1 = c.height/2;//画布高度的一半
        ctx.translate(x1,y1);//将绘图原点移到画布中点
        ctx.rotate(45*Math.PI/180);//旋转角度
        ctx.translate(-x1,-y1);//将画布原点移动
        ctx.drawImage(this.img,0,y1);//绘制图片 
        ctx.restore();
    }
    update() {
        this.xl()
        this.jcpz()
        this.scb()
        // this.rotate()
    }
}

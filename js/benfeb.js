new Load({
    srcItems: [
        'img/bg_day.png',
        'img/bird0_0.png',
        'img/pipe_down.png',
        'img/pipe_up.png',
    ],
    onload: start,
}).run()

function start() {
    var score=document.querySelector(".score");
    var replay=document.querySelector(".replay");
    var beginplay=document.querySelector(".beginplay");
    var c = document.getElementById("canvas");
    c.width = 288
    c.height = 512
    var ctx = c.getContext("2d");
    var gamescore=0

    var bg = {
        x: 0,
        y: 0,
        img: createImg('img/bg_day.png'),
        update:function(){
        }
    }

    var land={
        x:0,
        y:c.height-60,
        v:5,
        interval:0,
        img:createImg('img/land.png'),
        move:function(){
            this.x-=5
            if(this.x<-276){
                this.x=0
            }
        },
        update:function(){
            this.move()
        }
    }

    var bird = {
        x: 30,
        y: 280,
        v: 0,
        g: 0.2,
        img: createImg('img/bird0_0.png'),
        imgIndex: 0,
        interval: 1,
        rotation:0,
        jcpz: function () {
            var asd = isCollsionWithRect(bird, pipe_down)
            var asd1 = isCollsionWithRect(bird, pipe_down1)
            var asds1 = isCollsionWithRect(bird, pipe_up1)
            var asds = isCollsionWithRect(bird, pipe_up)
            if (asd || asds || asd1 || asds1) {
                bird.v = 50
                game.gameout()
            }
        },
        scb: function () {
            this.interval++
                if (this.interval === 10) {
                    this.interval = 0
                    if (this.imgIndex === 0) {
                        this.img = createImg('img/bird0_1.png')
                        this.imgIndex = 1
                    } else if (this.imgIndex === 1) {
                        this.img = createImg('img/bird0_2.png')
                        this.imgIndex = 2
                    } else if (this.imgIndex === 2) {
                        this.img = createImg('img/bird0_0.png')
                        this.imgIndex = 0
                    }
                }
        },
        xl: function () {
            this.v = this.v + this.g
            this.y = this.y + this.v
            if(this.y>400||this.y<0){
                this.y=430
                game.gameout()
            }
        },
        rotate:function(){
            ctx.save();
            this.rotation++
            var x1 = c.width/2; //画布宽度的一半
            var y1 = c.height/2;//画布高度的一半
            ctx.translate(x1,y1);//将绘图原点移到画布中点
            ctx.rotate(45*Math.PI/180);//旋转角度
            ctx.translate(-x1,-y1);//将画布原点移动
            ctx.drawImage(this.img,0,y1);//绘制图片 
            ctx.restore();
        },
        update: function () {
            this.xl()
            this.jcpz()
            this.scb()
            // this.rotate()
        }
    }

    class Pipe{
        constructor(x,y,v,img,state){
            this.x=x
            this.y=y
            this.v=v
            this.img=img
            this.state=state
        }
        update(){
            this.x -= 1
            if (this.x == -52) {
                this.x = 300
                gamescore+=0.5
                score.innerHTML=gamescore
                if(this.state==0){
                    this.y = rand()
                    console.log(this.y)
                    // this.x=rand()+450
                }
            }
        }

    }


    var pipe_down=new Pipe(100,rand(),0, createImg('img/pipe_down.png'),0)
    var pipe_down1=new Pipe(300,rand(),0, createImg('img/pipe_down.png'),0)
    var pipe_up1=new Pipe(100,rand1(),0, createImg('img/pipe_up.png'),1)
    var pipe_up=new Pipe(300,rand1(),0, createImg('img/pipe_up.png'),1)
    
    function rand() {
        var a = -250 + parseInt(100 * Math.random())
        return a
    }

    function rand1() {
        var a = 210 + parseInt(100 * Math.random())
        return a
    }



    var game = {
        sprites: [bg,pipe_down,pipe_up,pipe_down1,pipe_up1,bird,land],
        draw: function () {
            for (var i = 0; i < this.sprites.length; i++) {
                ctx.drawImage(this.sprites[i].img, this.sprites[i].x, this.sprites[i].y)
            }
        },
        update: function () {
            for (var i = 0; i < this.sprites.length; i++) {
                console.log(this.sprites.length)
                this.sprites[i].update()
            }
        },
        gameout:function(){
            setTimeout(function(){
                game.stop()
                replay.style.display="block"
                game.replayGame()
            },500)
        },
        stop:function(){
            clearInterval(interval);
        },
        replayGame:function(){
            replay.onclick=function(){
                score.innerHTML=0
                start()
                replay.style.display="none"
                beginplay.style.display="block"
            }
        },
    }

    document.onclick = function () {
        bird.v = -5
    }
    function draw(ctx) {
        ctx.clearRect(0, 0, 288, 512)
        game.draw()
    }
    function createImg(src) {
        var img = new Image()
        img.src = src
        return img
    }


    var begin=false
    var interval =setInterval(
        function () {
            beginplay.onclick=function(){
                begin=true
                beginplay.style.display="none"
            }
            if(begin){
                game.update()
            }
            draw(ctx)
        }, 1000 / 60
    )
   

   
}


function isCollsionWithRect(obj1, obj2) {
    var x1 = obj1.x
    var x2 = obj2.x
    var y1 = obj1.y
    var y2 = obj2.y
    var w1 = obj1.img.width
    var w2 = obj2.img.width
    var h1 = obj1.img.height
    var h2 = obj2.img.height
    // 矩形A位于矩形B的右侧
    if (x1 >= x2 && x1 >= x2 + w2) {
        return false;
        // 矩形A位于矩形B的左侧
    } else if (x1 <= x2 && x1 + w1 <= x2) {
        return false;
        // 矩形A位于矩形B的下侧
    } else if (y1 >= y2 && y1 >= y2 + h2) {
        return false;
        // 矩形A位于矩形B的上侧
    } else if (y1 <= y2 && y1 + h1 <= y2) {
        return false;
    }
    // 不相交都不满足，那就是相交了
    return true;
}
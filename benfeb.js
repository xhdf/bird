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
    var c = document.getElementById("canvas");
    c.width = 288
    c.height = 512
    var ctx = c.getContext("2d");

    var bg = {
        x: 0,
        y: 0,
        img: createImg('img/bg_day.png'),
        update: function () {


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
        jcpz: function () {
            var asd = isCollsionWithRect(bird, pipe_down)
            var asd1 = isCollsionWithRect(bird, pipe_down1)
            var asds1 = isCollsionWithRect(bird, pipe_up1)
            var asds = isCollsionWithRect(bird, pipe_up)
            if (asd || asds || asd1 || asds1) {
                bird.v = 50
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
        },
        update: function () {
            this.xl()
            this.jcpz()
            this.scb()
        }
    }

    var pipe_down = {
        x: 100,
        y: rand(),
        v: 0,
        img: createImg('img/pipe_down.png'),
        update: function () {
            this.x -= 1
            if (this.x == -52) {
                this.x = 300
                this.y = rand()
            }

        }
    }
    var pipe_down1 = {
        x: 300,
        y: rand(),
        v: 0,
        img: createImg('img/pipe_down.png'),
        update: function () {
            this.x -= 1
            if (this.x == -52) {
                this.x = 300
                this.y = rand()
            }
        },

    }

    function rand() {
        var a = -200 + parseInt(100 * Math.random())
        return a
    }

    function rand1() {
        var a = 250 + parseInt(100 * Math.random())
        return a
    }
    // setTimeout(rand(),1000);

    var pipe_up1 = {
        x: 400,
        y: rand1(),
        v: 0,
        img: createImg('img/pipe_up.png'),
        update: function () {
            this.x -= 1
            if (this.x == -52) {
                this.x = 300
            }
        }
    }

    var pipe_up = {
        x: 200,
        y: rand1(),
        v: 0,
        img: createImg('img/pipe_up.png'),
        update: function () {
            this.x -= 1
            if (this.x == -52) {
                this.x = 300
            }
        }
    }
    console.log(pipe_down1.y)
    console.log(pipe_up1.y)

    var game = {
        sprites: [],
        draw: function () {
            for (var i = 0; i < this.sprites.length; i++) {
                ctx.drawImage(this.sprites[i].img, this.sprites[i].x, this.sprites[i].y)
            }
        },
        update: function () {
            for (var i = 0; i < this.sprites.length; i++) {
                this.sprites[i].update()
            }
        }
    }
    game.sprites.push(bg)
    game.sprites.push(bird)
    game.sprites.push(pipe_down)
    game.sprites.push(pipe_up)
    game.sprites.push(pipe_down1)
    game.sprites.push(pipe_up1)



    document.onclick = function () {
        bird.v = -5
    }

    function createImg(src) {
        var img = new Image()
        img.src = src
        return img
    }

    setInterval(
        function () {
            update()
            draw(ctx)
        }, 1000 / 60
    )


    function update() {
        game.update()
    }


    function draw(ctx) {
        ctx.clearRect(0, 0, 288, 512)
        game.draw()
    }

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
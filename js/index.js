new Load({
    srcItems: [
        'img/bg_day.png',
        'img/bird0_0.png',
        'img/pipe_down.png',
        'img/pipe_up.png',
    ],
    onload: start,
}).run()

var log = console.log.bind(console)
var imageFromPath = function imageFromPath(src) {
    var img = new Image()
    img.src = src
    return img
}
function start() {
    var bg = new Bg()
    var land = new Land()
    var bird = new Bird()
    var pipe_down = new Pipes(100, rand(), imageFromPath('img/pipe_down.png'), 0)
    var pipe_down1 = new Pipes(300, rand(), imageFromPath('img/pipe_down.png'), 0)
    var pipe_up1 = new Pipes(100, rand1(), imageFromPath('img/pipe_up.png'), 1)
    var pipe_up = new Pipes(300, rand1(),  imageFromPath('img/pipe_up.png'), 1)
    var sprite = [bg, pipe_down, pipe_down1,bird,pipe_up1, pipe_up,land]
    var game = new Game(sprite)
    document.onclick = function () {
        bird.v = -5
    }
    bird.jcpz = function () {
        var landd=isCollsionWithRect(bird, land)
        var asd = isCollsionWithRect(bird, pipe_down)
        var asd1 = isCollsionWithRect(bird, pipe_down1)
        var asds1 = isCollsionWithRect(bird, pipe_up1)
        var asds = isCollsionWithRect(bird, pipe_up)
        if (asd || asd1 || asds1 || asds || landd) {
            this.v = 50
            game.gameout()
        }
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
function rand() {
    var a = -250 + parseInt(100 * Math.random())
    return a
}
function rand1() {
    var a = 210 + parseInt(100 * Math.random())
    return a
}

new Load({
    srcItems: [
        'img/bg_day.png',
        'img/bird0_0.png',
        'img/pipe_down.png',
        'img/pipe_up.png',
    ],
    onload: start,
}).run()

var c = document.getElementById("canvas")
c.width = 288
c.height = 512
var ctx = c.getContext("2d")
ctx.font = "35px 宋体"
ctx.fillStyle = "white"
var score = 0

function start() {
    var bg = new Bg()
    var land = new Land()
    var bird = new Bird()
    var pipe_down = new Pipes(100, rand(), imageFromPath('img/pipe_down.png'), 0)
    var pipe_down1 = new Pipes(300, rand(), imageFromPath('img/pipe_down.png'), 0)
    var pipe_up1 = new Pipes(100, rand()+500, imageFromPath('img/pipe_up.png'), 1)
    var pipe_up = new Pipes(300, rand()+500,  imageFromPath('img/pipe_up.png'), 1)
    var beginscene=new Scene(imageFromPath('img/text_ready.png'))
    var outscene=new Scene(imageFromPath('img/text_game_over.png'))
    var sprite = [bg,bird,land, pipe_down, pipe_down1,pipe_up1, pipe_up,beginscene,outscene]
    var game = new Game(sprite)
    
    document.onclick = function () {
        bird.v = -5
    }
}


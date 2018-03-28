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
    var bg = new Bg()
    var land = new Land()
    var bird = new Bird()
    var pipe_down = new Pipes(100, rand(), imageFromPath('img/pipe_down.png'), 0)
    var pipe_down1 = new Pipes(300, rand(), imageFromPath('img/pipe_down.png'), 0)
    var pipe_up1 = new Pipes(100, rand()+500, imageFromPath('img/pipe_up.png'), 1)
    var pipe_up = new Pipes(300, rand()+500,  imageFromPath('img/pipe_up.png'), 1)
    var sprite = [bg, pipe_down, pipe_down1,bird,pipe_up1, pipe_up,land]
    var game = new Game(sprite)
    document.onclick = function () {
        bird.v = -5
    }
    bird.jcpz = function () {
        var coll=[land,pipe_down,pipe_down1,pipe_up1,pipe_up]
        for (let i = 0; i < coll.length; i++) {
            var colllision=isCollsionWithRect(bird, coll[i])
            if(colllision){
                bird.v = 50
                game.gameout()
            }
        }
    }
}


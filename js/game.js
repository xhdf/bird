
// var Game = function (sprite) {
//     var sprite=sprite
//     var c = document.getElementById("canvas");
//     c.width = 288
//     c.height = 512
//     window.ctx = c.getContext("2d");
//     var score = document.querySelector(".score");
//     var replay = document.querySelector(".replay");
//     var beginplay = document.querySelector(".beginplay");
//     var begin = false
//     var interval = setInterval(
//         function () {
//             beginplay.onclick = function () {
//                 begin = true
//                 beginplay.style.display = "none"
//             }
//             if (begin) {
//                 g.update()
//             }
//             ctx.clearRect(0, 0, 288, 512)
//             g.draw()
//         }, 1000 / 60
//     )
    
//     var g = {
//         sprites:sprite,
//         draw: function () {  
//             for (var i = 0; i < this.sprites.length; i++) {
//                 ctx.drawImage(this.sprites[i].img, this.sprites[i].x, this.sprites[i].y)
//             }
//         },
//         update: function () {
//             for (var i = 0; i < this.sprites.length; i++) {
//                 this.sprites[i].update()
//             }
//         },
//         stop: function () {
//             clearInterval(interval);
//         },
//         replayGame: function () {
//             replay.onclick = function () {
//                 score.innerHTML = 0
//                 start()
//                 replay.style.display = "none"
//                 beginplay.style.display = "block"
//             }
//         },
//         gameout: function () {
//             setTimeout(function () {
//                 g.stop()
//                 replay.style.display = "block"
//                 g.replayGame()
//             }, 500)
//         },
//     }
//     return g
// }

class Game{
    constructor(sprite){
        this.sprites=sprite
        this.c = document.getElementById("canvas")
        this.c.width = 288
        this.c.height = 512
        window.ctx = this.c.getContext("2d")
        this.score = document.querySelector(".score")
        this.replay = document.querySelector(".replay")
        this.beginplay = document.querySelector(".beginplay")
        this.begin = false
        var _this=this
        this.interval = setInterval(
            function () {
                _this.beginplay.onclick = function () {
                    _this.begin = true
                    _this.beginplay.style.display = "none"
                }
                if (_this.begin) {
                    _this.update()
                }
                ctx.clearRect(0, 0, 288, 512)
                _this.draw()
            }, 1000 / 60
        )
    }
    draw() {  
        for (var i = 0; i < this.sprites.length; i++) {
            ctx.drawImage(this.sprites[i].img, this.sprites[i].x, this.sprites[i].y)
        }
    }
    update() {
        for (var i = 0; i < this.sprites.length; i++) {
            this.sprites[i].update()
        }
    }
    stop() {
        clearInterval(this.interval);
    }
    replayGame() {
        var _this=this
        _this.replay.onclick = function () {
            _this.score.innerHTML = 0
            start()
            _this.replay.style.display = "none"
            _this.beginplay.style.display = "block"
        }
    }
    gameout() {
        setTimeout(function () {
            this.stop()
            this.replay.style.display = "block"
            this.replayGame()
        }.call(this), 1500)
    }
}

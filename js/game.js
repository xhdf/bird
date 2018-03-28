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

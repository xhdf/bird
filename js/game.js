class Game {
    constructor(sprite) {
        this.sprites = sprite
        this.begin = false
        var _this = this
        this.interval = setInterval(
            function () {
                window.onclick = function () {
                    _this.begin = true
                }
                ctx.clearRect(0, 0, c.width, c.width)
                _this.draw()
                if (_this.begin) {
                    _this.update()
                } else {
                    _this.beginGame()
                }
            }, 1000 / 60
        )
    }
    beginGame() {
        ctx.drawImage(this.sprites[7].img, this.sprites[7].x, this.sprites[7].y)
    }
    draw() {
        for (var i = 0; i < this.sprites.length - 2; i++) {
            ctx.drawImage(this.sprites[i].img, this.sprites[i].x, this.sprites[i].y)
            ctx.fillText(score, 10, 50);
        }
    }
    update() {
        for (var i = 0; i < this.sprites.length; i++) {
            this.sprites[i].update()
        }
        this.collide()
    }
    collide() {
        for (let i = 2; i < this.sprites.length - 2; i++) {
            var colllision = isCollsionWithRect(this.sprites[1], this.sprites[i])
            if (colllision) {
                this.sprites[1].v = 50
                this.gameout()
            }
        }
    }
    stop() {
        clearInterval(this.interval);
        ctx.drawImage(this.sprites[8].img, this.sprites[8].x, this.sprites[8].y)
    }
    replayGame() {
        window.onclick = function () {
            start()
        }
    }
    gameout() {
        setTimeout(function () {
            this.stop()
            this.replayGame()
        }.bind(this), 1000)
    }
}

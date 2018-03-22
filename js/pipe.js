class Pipes {
    constructor(x,y,img,state) {
        this.x = x
        this.y = y
        this.v = 0
        this.img = img
        this.state = state
        this.gamescore=0
    }
    update() {
        var score = document.querySelector(".score")
        this.x -= 1
        if (this.x == -52) {
            this.x = 300
            this.gamescore += 1
            score.innerHTML = this.gamescore
            if (this.state == 0) {
                this.y = rand()
                // this.x=rand()+450
            }
        }
    }
}
// var Pipe=function(){
//     var piped={
//         x :100,
//         y :300,
//         v :0,
//         img :imageFromPath('img/pipe_down.png'),
//         state :0,
//         gamescore:0,
//         update() {
//             var score = document.querySelector(".score");
//             this.x -= 1
//             if (this.x == -52) {
//                 this.x = 300
//                 this.gamescore += 0.5
//                 score.innerHTML = this.gamescore
//                 if (this.state == 0) {
//                     this.y = this.rand()
//                     // this.x=rand()+450
//                 }
//             }
//         },
//         rand() {
//             var a = -250 + parseInt(100 * Math.random())
//             return a
//         },
//         rand1() {
//             var a = 210 + parseInt(100 * Math.random())
//             return a
//         }
//     }
//     return piped
// }
class Land{
    constructor(){
        this.x=0
        this.y=452
        this.v=5
        this.interval=0
        this.img=imageFromPath('img/land.png')
    }
    move(){
        this.x-=5
        if(this.x<-276){
            this.x=0
        }
    }
    update(){
        this.move()
    }
}
// var Land = function () {
//     var landd = {
//         x: 0,
//         y: 452,
//         v: 5,
//         interval: 0,
//         img: imageFromPath('img/land.png'),
//         move: function () {
//             this.x -= 5
//             if (this.x < -276) {
//                 this.x = 0
//             }
//         },
//         update: function () {
//             this.move()
//         }
//     }
//     return landd
// }
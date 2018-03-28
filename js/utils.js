var log = console.log.bind(console)
function imageFromPath(src) {
    var img = new Image()
    img.src = src
    return img
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

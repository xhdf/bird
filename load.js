function Load(json) {
    this.srcItems = json.srcItems || []
    this.onload = json.onload
    this.onmove = json.onmove
    this.loadLength = 0
}


Load.prototype.add = function(src) {
    this.srcItems.push(src)
};

Load.prototype.run = function() {
    for (var i = 0; i < this.srcItems.length; i++) {
        var img = new Image()
        var _this = this
        img.onload = function() {

            _this.loadLength++;
            _this.progress = _this.loadLength / _this.srcItems.length
            // _this.onmove(_this.progress * 100)
            if (_this.loadLength === _this.srcItems.length) {
                _this.onload()
            }
        }
        img.src = this.srcItems[i]
    }
};


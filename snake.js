function Snake(xInit, yInit) {
    this.x = xInit;
    this.y = yInit;

    this.show = function () {
        fill(255)
        rect(this.x, this.y, scl, scl);
    }
}

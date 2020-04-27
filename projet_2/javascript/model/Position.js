class Position {

    constructor(x, y) {
        this.__x = x;
        this.__y = y;
    }

    get x() {
        return this.__x;
    }

    get y() {
        return this.__y;
    }

    set x(newX) {
        this.__x = newX;
    }

    set y(newY) {
        this.__y = newY;
    }
}
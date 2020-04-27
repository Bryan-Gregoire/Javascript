class Position {

    constructor(x, y) {
        this.__x = $("#scene").offset().left;
        this.__y = $("#scene").offset().top;
    }

    get getX() {
        return this.__x;
    }

    get getY() {
        return this.__y;
    }

    set setX(newX) {
        this.__x = newX;
    }

    set setY(newY) {
        this.__y = newY;
    }
}
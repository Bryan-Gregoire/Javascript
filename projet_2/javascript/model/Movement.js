class Movement {

    constructor(deltaX, deltaY) {
        this.__deltaX;
        this.__deltaY;
    }

    get getDeltaX() {
        return this.__deltaX;
    }

    get getDeltaY() {
        return this.__deltaY;
    }

    set setDeltaX(newDeltaX) {
        this.__deltaX = this.__deltaX + newDeltaX;
    }

    set setDeltaY(newDeltaY) {
        this.__deltaX = this.__deltaX + newDeltaX
    }
}
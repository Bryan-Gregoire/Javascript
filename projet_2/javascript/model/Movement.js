class Movement {

    constructor(deltaX, deltaY) {
        this.__deltaX = deltaX;
        this.__deltaY = deltaY;
    }

    get deltaX() {
        return this.__deltaX;
    }

    get deltaY() {
        return this.__deltaY;
    }

    set deltaX(newDeltaX) {
        this.__deltaX = newDeltaX;
    }

    set deltaY(newDeltaY) {
        this.__deltaX = newDeltaY;
    }

    reverseX() {
        this.__deltaX = -this.__deltaX;
    }

    reverseY() {
        this.__deltaY = -this.__deltaY;
    }
}
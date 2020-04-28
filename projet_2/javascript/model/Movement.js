/**
 * The movement of the ball.
 * 
 */
class Movement {

    /**
     * The constructor of Movement.
     *  
     * @param {*} deltaX the direction to move.
     * @param {*} deltaY the direction to move.
     */
    constructor(deltaX, deltaY) {
        this.__deltaX = deltaX;
        this.__deltaY = deltaY;
    }

    /**
     * Get the deltaX.
     * 
     */
    get deltaX() {
        return this.__deltaX;
    }

    /**
     * Get the deltaY.
     * 
     */
    get deltaY() {
        return this.__deltaY;
    }

    /**
     * Set new value at deltaX.
     * 
     */
    set deltaX(newDeltaX) {
        this.__deltaX = newDeltaX;
    }

    /**
     * Set new value at DeltaY.
     */
    set deltaY(newDeltaY) {
        this.__deltaX = newDeltaY;
    }

    /**
     * Reverse deltaX.
     * 
     */
    reverseX() {
        this.__deltaX = -this.__deltaX;
    }

    /**
     * Reverse deltaY.
     * 
     */
    reverseY() {
        this.__deltaY = -this.__deltaY;
    }
}
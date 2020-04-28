/**
 * The position in the game.
 * 
 */
class Position {

    /**
     * Constructor of a position.
     * 
     * @param {*} x horizontal axis.
     * @param {*} y vertical axis.
     */
    constructor(x, y) {
        this.__x = x;
        this.__y = y;
    }

    /**
     * Get the x.
     * 
     */
    get x() {
        return this.__x;
    }

    /**
     * Get the Y.
     */
    get y() {
        return this.__y;
    }

    /**
     * Set new value at x.
     * 
     */
    set x(newX) {
        this.__x = newX;
    }

    /**
     * Set new value at y.
     * 
     */
    set y(newY) {
        this.__y = newY;
    }
}
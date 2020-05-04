/**
 * The elements common to all the elements of the game.
 * 
 */
class Sprite {

    /**
     * Constructor of Sprite.
     * 
     * @param {*} topLeft the given position.
     * @param {*} dimension the given dimension.
     */
    constructor(topLeft, dimension) {
        this._topLeft = topLeft;
        this._dimension = dimension;
    }

    /**
     * Get the position.
     * 
     */
    get topLeft() { return this._topLeft; }

    /**
     * Get the dimension.
     * 
     */
    get dimension() { return this._dimension; }

    /**
     * Set a new position.
     */
    set topLeft(newTopLeft) { this._topLeft = newTopLeft ; }
}
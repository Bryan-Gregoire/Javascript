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
    constructor(topLeft, dimension, id, type) {
        this._topLeft = topLeft;
        this._dimension = dimension;
        this._id = id;
        this._type = type;
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
     * Get the id.
     * 
     */
    get id() { return this._id; }

    /**
     * Get the type.
     * 
     */
    get type() { return this._type; }

    /**
     * Set a new position.
     */
    set topLeft(newTopLeft) { this._topLeft = newTopLeft; }
}
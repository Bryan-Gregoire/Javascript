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

    get right() {
        return this._topLeft.x + this._dimension.width;
    }

    get bottom() {
        return this._topLeft.y + this._dimension.height;
    }

    get x() {
        return this._topLeft.x;
    }

    get y() {
        return this._topLeft.y;
    }

    /**
     * Set a new position.
     */
    set topLeft(newTopLeft) { this._topLeft = newTopLeft; }

    bounce(sprite1, sprite2) {

        let leftSprite1 = sprite1.x;
        let rightSprite1 = sprite1.x + sprite1._dimension.width;
        let bottomSprite1 = sprite1.y + sprite1._dimension.height;
        let leftSprite2 = sprite2.left;
        let rightSprite2 = leftSprite2 + sprite2.dimension.width;

        if (bottomSprite1 > paddleTopPos + 2 && ((rightSprite1 > leftSprite2) && (leftSprite1 < rightSprite2))) {
            return "sides";
        } else if (bottomSprite1 >= paddleTopPos && (rightSprite1 >= leftSprite2 && leftSprite1 <= rightSprite2)) {
            return "top";
        } 
    }
}
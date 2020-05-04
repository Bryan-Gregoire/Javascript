/**
 * Represents the size of an element.
 * 
 */
class Dimension {

    /**
     * Constructor of Dimension.
     * 
     * @param {*} width the given width.
     * @param {*} height the given height.
     */
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    /**
     * Get the width.
     * 
     */
    get width() {
        return this._width;
    }

    /**
     * Get the height.
     * 
     */
    get height() {
        return this._height;
    }
}

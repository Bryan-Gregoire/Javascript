/**
 * The paddle of the game.
 * 
 */
class Paddle extends Sprite {

    /**
     * Constructor of Paddle.
     * 
     * @param {*} position the given position.
     * @param {*} dimension the given dimension.
     */
    constructor(position, dimension, id,type) {
        super(position, dimension, id,type);
        this.__left = super.position;
        this.__dimension = super.dimension;
    }

    /**
     * Change the position.
     * 
     * @param {*} centerX the given position to change.
     */
    moveTo(centerX) {
        super.left = this.moveInScene(centerX);
    }

    /**
     * The paddle move in the scene.
     * 
     * @param {*} left the given left.
     */
    moveInScene(left) {
        if (left < 0) {
            return 0;
        } else if (left > sceneWidth - this.__dimension.width) {
            return sceneWidth - this.__dimension.width;
        } else {
            return left
        }
    }
}
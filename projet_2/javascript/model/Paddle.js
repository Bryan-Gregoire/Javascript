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
    constructor(position, dimension) {
        super(position, dimension);
        this.__left = super.position;
    }

    /**
     * Get the position.
     * 
     */
    get left() {
        return this.__left;
    }

    /**
     * Change the position.
     * 
     * @param {*} centerX the given position to change.
     */
    moveTo(centerX) {
        this.__left = this.moveInScene(centerX);
    }

    /**
     * The paddle move in the scene.
     * 
     * @param {*} left the given left.
     */
    moveInScene(left) {
        if (left < 0) {
            return 0;
        } else if (left > sceneWidth - paddleWidth) {
            return sceneWidth - paddleWidth;
        } else {
            return left
        }
    }
}
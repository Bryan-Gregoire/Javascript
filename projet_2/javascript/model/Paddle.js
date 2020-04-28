/**
 * The paddle of the game.
 * 
 */
class Paddle {

    /**
     * The constructor of paddle.
     * 
     * @param {*} left 
     */
    constructor(left) {
        this.__left = this.moveInScene(left);
    }

    /**
     * Get the left.
     * 
     */
    get left() {
        return this.__left;
    }

    /**
     * Change the left.
     * 
     * @param {*} left the left to change.
     */
    moveTo(left) {
        this.__left = this.moveInScene(left);
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
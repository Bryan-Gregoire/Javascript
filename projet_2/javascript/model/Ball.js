/**
 * The ball of the game.
 */
class Ball extends Sprite {

    /**
     * Constructor of Ball.
     * 
     * @param {*} topLeft the position of the ball.
     * @param {*} movement the movement of the ball.
     * @param {*} dimension the size of the ball.
     */
    constructor(topLeft, movement, dimension, id,type) {
        super(topLeft, dimension, id,type);
        this._movement = movement;
        this._dimension = dimension;
    }

    /**
     * Get the movement of the ball.
     * 
     */
    get movement() {
        return this._movement;
    }

    /**
     * Get the dimension of the ball.
     * 
     */
    get dimension() {
        return this._dimension;
    }

    /**
     * Move the position of the ball relative to its movement.
     * 
     */
    move() {
        let x = super.topLeft.x + this._movement.deltaX;
        let y = super.topLeft.y + this._movement.deltaY;
        super.topLeft = new Position(x, y);
        this.ballInScene(super.topLeft, this._movement);
    }

    /**
     * Changes the position of the ball if it hits a wall.
     * 
     * @param {*} position the position of the ball.
     * @param {*} moves the movement of the ball.
     */
    ballInScene(position, moves) {
        if (position.x < 0) {
            moves.reverseX();
        }
        if (position.y < 0) {
            moves.reverseY();
        }
        if (position.x > sceneWidth - this._dimension.width) {
            moves.reverseX();
        }
        if (position.y > sceneHeight - this._dimension.height) {
            moves.reverseY();
        }
    }
}
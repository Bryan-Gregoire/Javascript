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
    constructor(topLeft, movement, dimension) {
        super(topLeft, dimension);
        this.__topLeft = super.topLeft;
        this.__movement = movement;
    }

    /**
     * Get the position of the ball.
     * 
     */
    get topLeft() {
        return this.__topLeft;
    }

    /**
     * Get the movement of the ball.
     * 
     */
    get movement() {
        return this.__movement;
    }

    /**
     * Move the position of the ball relative to its movement.
     * 
     */
    move() {
        let x = this.__topLeft.x + this.__movement.deltaX;
        let y = this.__topLeft.y + this.__movement.deltaY;
        this.__topLeft = new Position(x, y);
        this.ballInScene(this.__topLeft, this.__movement);
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
        if (position.x > sceneWidth - ballWidth) {
            moves.reverseX();
        }
        if (position.y > sceneHeight - ballHeight) {
            moves.reverseY();
        }
    }
}
/**
 * A facade for the model.
 */
class Game {

    /**
     * The constructor of the game.
     * 
     */
    constructor() {
        this.__paddle = new Paddle(sceneWidth / 2 - paddleWidth / 2);
        this.__ball = new Ball(new Position(this.randomPosX(), sceneHeight / 2 - ballHeight / 2), new Movement(this.randomDeltaX(), -3));
    }

    /**
     * Get the paddle of the game.
     * 
     */
    get paddle() {
        return this.__paddle;
    }

    /**
     * Get the ball of the game.
     */
    get ball() {
        return this.__ball;
    }

    /**
     * Random number for x-axis.
     * 
     */
    randomPosX() {
        let range = (sceneWidth - ballWidth) + 1;
        return Math.trunc(Math.random() * range);
    }

    /**
     * Random movements for the ball.
     */
    randomDeltaX() {
        return (Math.random() * 6) - 3;
    }

    /**
     * Move the paddle in the game.
     * 
     * @param {*} centerX the move of the paddle.
     */
    paddleMove(centerX) {
        centerX = this.__paddle.moveTo();
    }

    /**
     * Move of the ball in the game.
     * 
     */
    ballMove() {
        this.__ball.move();
    }
}
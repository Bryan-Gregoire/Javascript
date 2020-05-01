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
        this.__ball = new Ball(new Position(this.randomPosX(), sceneHeight / 2 - ballHeight / 2), new Movement(this.randomDeltaX(), -1));
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
        this.__paddle.moveTo(centerX);
    }

    /**
     * Move of the ball in the game.
     * 
     */
    ballMove() {
        this.__ball.move();

        let ballBottomLeftX = this.__ball.topLeft.x;                    // Coin en bas a gauche de la balle( le x).
        let ballBottomLeftY = this.__ball.topLeft.y + ballHeight;       // Coin en bas a gauche de la balle(le y ).   
        let ballBottomRightX = this.__ball.topLeft.x + ballWidth;       // Coin en bas a droite de la balle(le x). 
        let ballBottomRightY = this.__ball.topLeft.y + ballHeight;      // Coin en bas a droite de la balle(le y).

        let leftPaddle = this.__paddle.left; // A gauche du paddle.
        let rightPaddle = leftPaddle + paddleWidth; // A droite du paddle.

        if (ballBottomRightY > paddleTopPos + 2 && ((ballBottomRightX >= leftPaddle) && (ballBottomLeftX <= rightPaddle))) {
            this.placeBallOnSide(ballBottomRightX, leftPaddle, rightPaddle);
            this.__ball.movement.reverseX();
        } else if (ballBottomRightY == paddleTopPos && (ballBottomRightX == leftPaddle || ballBottomLeftX == rightPaddle)) {
            this.__ball.movement.reverseX();
            this.__ball.movement.reverseY();
        } else if (ballBottomRightY >= paddleTopPos && (ballBottomRightX >= leftPaddle && ballBottomLeftX <= rightPaddle)) {
            this.placeBallPaddleTop();
            this.__ball.movement.reverseY();
        }
    }

    /**
     * Put the ball on the top of the paddle.
     * 
     */
    placeBallPaddleTop() {
        this.__ball.topLeft.y = paddleTopPos - ballHeight;
    }

    /**
     * if the ball touches the left side of the paddle, the ball is placed on the left side of the paddle else on the right side.
     * 
     * @param {*} ballBottomRightX The bottom right of the ball.
     * @param {*} leftPaddle The left side of the paddle.
     * @param {*} rightPaddle The right side of the paddle.
     */
    placeBallOnSide(ballBottomRightX, leftPaddle, rightPaddle) {
        if (ballBottomRightX >= leftPaddle && ballBottomRightX < (leftPaddle + (paddleWidth / 2))) {
            this.__ball.topLeft.x = leftPaddle - ballWidth;
        } else {
            this.__ball.topLeft.x = rightPaddle;
        }
    }

}
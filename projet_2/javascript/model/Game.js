/**
 * A facade for the model.
 */
class Game {

    /**
     * The constructor of the game.
     * 
     */
    constructor() {
        this.__paddle = new Paddle(sceneWidth / 2 - paddleWidth / 2, new Dimension(paddleWidth, paddleHeight), "raquette", "paddle");
        this.__ball = new Ball(new Position(this.randomPosX(), sceneHeight / 2 - ballHeight / 2), new Movement(this.randomDeltaX(), -1),
            new Dimension(ballWidth, ballHeight), "balle", "ball");
        this.__wall = new Brick(this.buildWall(), new Dimension(BRICKWIDTH, BRICKHEIGHT), "", "brick");
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
     * Get the wall of the game.
     * 
     */
    get wall() {
        return this.__wall;
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
     * Create the wall of the game. Each brick has different positions.
     * 
     */
    buildWall() {
        let wall = [];
        let left = 0;
        let top = 72;
        for (let y = 0; y < BRICKY; y++) {
            if (y > 0) {
                top = top + BRICKHEIGHT;
            }
            for (let x = 0; x < BRICKX; x++) {
                if (x > 0) {
                    left = left + BRICKWIDTH;
                }
                wall.push(new Position(left, top));
            }
            left = 0;
        }
        return wall;
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
     * Move of the ball in the game, bounce if hit elements of the game.
     * 
     */
    ballMove() {
        this.__ball.move();

        let ballBottomRightX = this.__ball.right;                                         // A droite de la balle(le x). 
        let leftPaddle = this.__paddle.left;                                              // A gauche du paddle.
        let rightPaddle = leftPaddle + this.__paddle.dimension.width;                     // A droite du paddle.

        if (this.__ball.bounceOnPaddle(this.__ball, this.__paddle) == "sides") {
            this.placeBallOnSide(ballBottomRightX, leftPaddle, rightPaddle);
            this.__ball.movement.reverseX();
        } else if (this.__ball.bounceOnPaddle(this.__ball, this.__paddle) == "top") {
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
     * The ball touches the sides of the paddle, if the ball touched the left side of the paddle,
     * the ball is placed on the left side else on the right side.
     * 
     * @param {*} ballBottomRightX The bottom right of the ball.
     * @param {*} leftPaddle The left side of the paddle.
     * @param {*} rightPaddle The right side of the paddle.
     */
    placeBallOnSide(ballBottomRightX, leftPaddle, rightPaddle) {
        if (ballBottomRightX >= leftPaddle && ballBottomRightX < (leftPaddle + (paddleWidth / 2))) {
            this.__ball.topLeft.x = leftPaddle - this.__ball.dimension.width;
        } else {
            this.__ball.topLeft.x = rightPaddle;
        }
    }

}
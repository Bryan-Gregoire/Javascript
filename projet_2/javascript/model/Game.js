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
        this.__wall = this.buildWall();
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
                wall.push(new Brick(new Position(left, top), new Dimension(BRICKWIDTH, BRICKHEIGHT), y + "-" + x, "brick"));
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
        let destroyBricks = this.bounceOnWall();
        let ballBottomRightX = this.__ball.right;                                         // A droite de la balle(le x). 
        let leftPaddle = this.__paddle.left;                                              // A gauche du paddle.
        let rightPaddle = leftPaddle + this.__paddle.dimension.width;                     // A droite du paddle.

        if (this.__ball.bounceOnPaddle(this.__ball, this.__paddle) == "sides") {
            this.placeBallOnSide(this.__paddle, ballBottomRightX, leftPaddle, rightPaddle);
            this.__ball.movement.reverseX();
        } else if (this.__ball.bounceOnPaddle(this.__ball, this.__paddle) == "top") {
            this.placeBallSpriteTop(paddleTopPos);
            this.__ball.movement.reverseY();
        }
        return destroyBricks;
    }


    /**
     * Repalce the ball on the top of the given sprite.
     * 
     * @param {*} spriteTop the given sprite.
     */
    placeBallSpriteTop(spriteTop) {
        this.__ball.topLeft.y = spriteTop - ballHeight;
    }

    /**
     * replace the ball on the bottom of the sprite.
     * 
     * @param {*} spriteBottom 
     */
    placeBallSpriteBottom(spriteBottom) {
        this.__ball.topLeft.y = spriteBottom;
    }

    /**
     * The ball touches the sides of the paddle, if the ball touched the left side of the paddle,
     * the ball is placed on the left side else on the right side.
     * 
     * @param {*} sprite the given sprite.
     * @param {*} ballRightX The bottom right of the ball.
     * @param {*} leftSprite The left side of the sprite.
     * @param {*} rightSprite The right side of the sprite.
     */
    placeBallOnSide(sprite, ballRightX, leftSprite, rightSprite) {
        if (ballRightX >= leftSprite && ballRightX < (leftSprite + (sprite.dimension.width / 2))) {
            this.__ball.topLeft.x = leftSprite - this.__ball.dimension.width;
        } else {
            this.__ball.topLeft.x = rightSprite;
        }
    }

    /**
     * Check if the ball touch a brick.
     * 
     */
    bounceOnWall() {
        let destroyBrick = [];
        let i = 0;
        let bounce = false;
        while (!bounce && i < this.__wall.length) {
            let leftBrick = this.__wall[i].topLeft.x;
            let rightBrick = this.__wall[i].topLeft.x + BRICKWIDTH;
            let topBrick = this.__wall[i].topLeft.y;
            let bottomBrick = this.__wall[i].topLeft.y + BRICKHEIGHT;
            let bottomBall = this.ball.topLeft.y + ballHeight;
            let topBall = this.ball.topLeft.y;
            let rightBall = this.ball.topLeft.x + ballWidth;
            let leftBall = this.ball.topLeft.x;

            if ((bottomBall > topBrick + 2 && topBall < bottomBrick - 2) && rightBall > leftBrick && leftBall < rightBrick) {          // Si ca touche les cotés.
                this.placeBallOnSide(this.__wall[i], rightBall, leftBrick, rightBrick);
                this.__ball.movement.reverseX();
                destroyBrick.push(this.__wall[i]);
                this.__wall.splice(i, 1);
                bounce = true;
            } else if ((bottomBall >= topBrick && bottomBall < topBrick + 1) && (rightBall >= leftBrick && leftBall <= rightBrick)) {  // Si ca touche le haut de la brique.
                this.placeBallSpriteTop(topBrick);
                this.__ball.movement.reverseY();
                destroyBrick.push(this.__wall[i]);
                this.__wall.splice(i, 1);
                bounce = true;
            } else if ((topBall <= bottomBrick && topBall > bottomBrick - 1) && (rightBall >= leftBall && leftBall <= rightBrick)) {   // Si ca touche le bas de la brique.
                this.placeBallSpriteBottom(bottomBrick);
                this.__ball.movement.reverseY();
                destroyBrick.push(this.__wall[i]);
                this.__wall.splice(i, 1);
                bounce = true;
            }
            i++;
        }
        return destroyBrick;
    }
}
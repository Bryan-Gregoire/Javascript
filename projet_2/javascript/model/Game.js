/**
 * A facade for the model.
 */
class Game {

    /**
     * The constructor of the game.
     * 
     */
    constructor() {
        this.__paddle = new Paddle(new Position(432, paddleTopPos), new Dimension(paddleWidth, paddleHeight), "raquette", "paddle");
        this.__ball = new Ball(new Position(this.randomPosX(), sceneHeight / 2 - ballHeight / 2), new Movement(this.randomDeltaX(), -1),
            new Dimension(ballWidth, ballHeight), "balle", "ball");
        this.__wall = this.buildWall();
        this.__player = new Player(0, 5);
        this.__currentLevel = 1;
    }

    /**
     * Get the paddle of the game.
     * 
     */
    get paddle() { return this.__paddle; }

    /**
     * Get the ball of the game.
     */
    get ball() { return this.__ball; }

    /**
     * Get the wall of the game.
     * 
     */
    get wall() { return this.__wall; }

    /**
     * Get the player of the game.
     * 
     */
    get player() { return this.__player; }

    /**
     * Get the current level.
     * 
     */
    get level() { return this.__currentLevel; }

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
     * Replace the ball on the side of the touched sprite.
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
     * Check if the ball touch bricks.
     * 
     */
    bounceOnWall() {
        let destroyBrick = [];
        let i = 0;
        let bottomBall = this.ball.topLeft.y + ballHeight;
        let topBall = this.ball.topLeft.y;
        let rightBall = this.ball.topLeft.x + ballWidth;
        let leftBall = this.ball.topLeft.x;

        while (i < this.__wall.length) {
            let leftBrick = this.__wall[i].topLeft.x;
            let rightBrick = this.__wall[i].topLeft.x + BRICKWIDTH;
            let topBrick = this.__wall[i].topLeft.y;
            let bottomBrick = this.__wall[i].topLeft.y + BRICKHEIGHT;

            if (this.bounceSideBrick(bottomBall, topBall, topBrick, bottomBrick, rightBall, leftBall, leftBrick, rightBrick)) {     // Si ca touche un des cotés d'une brique.
                this.placeBallOnSide(this.__wall[i], rightBall, leftBrick, rightBrick);                                             // Je replace la balle sur le coté toucher.
                this.__ball.movement.reverseX();                                                                                    // J'inverse le mouvement x de la balle.
                destroyBrick.push(this.__wall[i]);                                                                                  // J'ajoute la brique a détruire dans un tableau.
                this.__wall.splice(i, 1);                                                                                           // Je supprime la brique du mur.
                this.__player.addToScore(10);                                                                                       // Gagne des points.
            }
            else if (this.bounceTopBrick(bottomBall, topBrick, rightBall, leftBall, leftBrick, rightBrick)) {                       // Si ca touche le haut d'une brique.
                this.placeBallSpriteTop(topBrick);                                                                                  // je replace la balle sur le haut de la brique.
                this.__ball.movement.reverseY();                                                                                    // J'inverse le mouvemet y de la balle.
                destroyBrick.push(this.__wall[i]);                                                                                  // J'ajoute la brique a détruire dans un tableau.
                this.__wall.splice(i, 1);                                                                                           // Je supprime la brique du mur.
                this.__player.addToScore(10);                                                                                       // // Gagne des points.
            }
            else if (this.bounceBottomBrick(topBall, bottomBrick, rightBall, leftBall, rightBrick, leftBrick)) {                    // Si ca touche le bas d'une brique.
                this.placeBallSpriteBottom(bottomBrick);                                                                            // je replace la balle en bas de la brick toucher.
                this.__ball.movement.reverseY();                                                                                    // j'inverse le mouvement y de la balle.
                destroyBrick.push(this.__wall[i]);                                                                                  // J'ajoute la brique a détruire dans un tableau.
                this.__wall.splice(i, 1);                                                                                           // Je supprime la brique du mur.
                this.__player.addToScore(10);                                                                                       // Gagne des points.
            }
            i++;
        }
        return destroyBrick;
    }

    /**
     * Check if the ball touch the sides of a brick.
     * 
     * @param {*} bottomBall the bottom of the ball.
     * @param {*} topBall the top of the ball.
     * @param {*} topBrick the top of the brick.
     * @param {*} bottomBrick the bottom of the brick.
     * @param {*} rightBall the right of the ball.
     * @param {*} leftBall the left of the ball.
     * @param {*} leftBrick the left of the brick.
     * @param {*} rightBrick the right of the brick.
     */
    bounceSideBrick(bottomBall, topBall, topBrick, bottomBrick, rightBall, leftBall, leftBrick, rightBrick) {
        return bottomBall > topBrick + 1 && topBall < bottomBrick - 1 && rightBall > leftBrick && leftBall < rightBrick;
    }

    /**
     * Check if the ball touch the the top a brick.
     * 
     * @param {*} bottomBall the bottom of the ball.
     * @param {*} topBrick the top of the brick.
     * @param {*} rightBall the right of the ball.
     * @param {*} leftBall the left of the ball.
     * @param {*} leftBrick the left of the brick.
     * @param {*} rightBrick the right of the brick.
     */
    bounceTopBrick(bottomBall, topBrick, rightBall, leftBall, leftBrick, rightBrick) {
        return bottomBall >= topBrick && bottomBall < topBrick + 1 && rightBall > leftBrick && leftBall < rightBrick;
    }

    /**
     * Check if the ball touch the bottom of a brick.
     * 
     * @param {*} topBall the top of the ball.
     * @param {*} bottomBrick the bottom of the brick.
     * @param {*} rightBall the right of the ball.
     * @param {*} leftBall the left of the ball.
     * @param {*} rightBrick the right of the brick.
     * @param {*} leftBrick the left of the brick.
     */
    bounceBottomBrick(topBall, bottomBrick, rightBall, leftBall, rightBrick, leftBrick) {
        return topBall <= bottomBrick && topBall > bottomBrick - 1 && rightBall > leftBrick && leftBall < rightBrick;
    }

    /**
     * Check if the ball touch de bottom of the scene.
     * 
     */
    lost() {
        if ((this.__ball.topLeft.y + ballHeight) >= (sceneHeight)) {
            this.__player.hurt();
            return true;
        }
    }

    /**
     * Check if there is no more brick.
     * 
     */
    win() {
        if (this.__wall.length == 0) {
            this.__player.winOneLive();
            return true;
        }
    }

}
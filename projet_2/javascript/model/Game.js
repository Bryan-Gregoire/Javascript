class Game {
    constructor() {
        this.__paddle = new Paddle(sceneWidth / 2 - paddleWidth / 2);
        this.__ball = new Ball(new Position(this.randomPosX(), sceneHeight / 2 - ballHeight / 2), new Movement(this.randomDeltaX(), -3));
    }

    get paddle() {
        return this.__paddle;
    }

    get ball() {
        return this.__ball;
    }

    paddleMove(centerX) {
        centerX = this.__paddle.moveTo();
    }

    ballMove() {
        this.__ball.move();
    }

    randomPosX() {
        let range = (sceneWidth - ballWidth) + 1;
        return Math.trunc(Math.random() * range);
    }

    randomDeltaX() {
        return (Math.random() * 6) -3;
    }
}
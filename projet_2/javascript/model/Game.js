class Game {
    constructor() {
        this.__paddle = Paddle;
        this.__ball = Ball;
    }

    get paddle() {
        return this.__paddle;
    }

    get ball() {
        return this.__ball;
    }

    paddleMove(centerX) {
        centerX = this.paddle.moveTo(this.__paddle.left);
    }

    ballMove() {
        this.ball.move();
    }
}
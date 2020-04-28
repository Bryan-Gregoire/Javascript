class Game {
    constructor() {
        this.__paddle = new Paddle(300);
        this.__ball = new Ball(new Position(400, 500), new Movement(3, -2));
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
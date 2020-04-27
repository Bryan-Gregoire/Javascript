class Ball {

    constructor(position, movement) {
        this.__topLeft = position;
        this.__movement = movement;
    }

    get topLeft() {
        return this.__topLeft;
    }

    get movement() {
        return this.__movement;
    }

    move() {
        let x = this.__topLeft.x + this.__movement.deltaX;
        let y = this.__topLeft.y + this.__movement.deltaY;
        this.__topLeft = new Position(x, y);
        this.ballInScene(this.__topLeft);
    }

    ballInScene(position) {
        if (position.x < 0) {
            reverseX();
        }
        if (position.y < 0) {
            reverseY();
        }
        if (position.x > sceneWidth) {
            reverseX();
        }
        if (position.y > sceneWidth) {
            reverseY();
        }
    }
}
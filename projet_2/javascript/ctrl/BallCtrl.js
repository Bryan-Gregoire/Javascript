/** 
* Controller of the Ball.
* Suggests methods to start / stop the ball and move it.
*/
class BallCtrl {

    /**
   * @param { Ball } ball - The ball to control.
   * @param { View } view - The view.
   */
    constructor(game, view) {
        this._ball = game.ball;
        this._view = view;
        view.displayBall(this._ball);
    }

    /**
     * Start the ball.
     * 
     */
    start() {
        this._moveListener = setInterval(() => this.move(), 10);
    }

    /**
     * Move the ball one step (defined by its movement) and refresh the view.
     */
    move() {
        this._ball.move();
        this._view.displayBall(this._ball);
    }

    /**
     * Stop the ball.
     */
    stop() {
        clearInterval(this._moveListener);
    }
}
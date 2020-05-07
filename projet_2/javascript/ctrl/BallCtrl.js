/** 
* Controller of the Ball.
* Suggests methods to start / stop the ball and move it.
*/
class BallCtrl {

    /**
   * @param { Game } game - The game.
   * @param { View } view - The view.
   */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        this._view.update(this._game.ball);
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
        this._view.update(this._game.ball);
        this._view.removeBricks(this._game.ballMove());
    }

    /**
     * Stop the ball.
     */
    stop() {
        clearInterval(this._moveListener);
    }
}
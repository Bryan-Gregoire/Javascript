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
        this._view.updateScore(this._game.__player.score);
        if (this._game.lost()) {
            this.stop();
            this._view.showLives(this._game.player.live);
            if (this._game.player.alive()) {
                this._view.showMessage("You lost");
            }
        }
        if (this._game.win()) {
            this.stop();
            this._view.showLives(this._game.player.live);
            this._view.showMessage("You won");
        }
    }

    /**
     * Stop the ball.
     */
    stop() {
        clearInterval(this._moveListener);
    }
}
/**
 * Controller for the paddle movement.
 * It make it follow the mouse.
 */
class PaddleCtrl {

    /**
    * Display the paddle and start controlling it with the mouse.
    * @param {Game} game : the game
    * @param {View} view : the view
    */
    constructor(game, view) {
        this.__game = game;
        view.displayPaddle(this.__game.paddle);
        $(document).mousemove((evt) => this.moveMouse(this.__game.paddle, view, evt));
    }

    /**
    * Called when the mouse is moved.
    * It moves the paddle (horizontally) where the mouse is.
    * @param {Game} game : the game
    * @param {View} view : the view
    * @param {MouseEvent} evt : the mouse event
    */
    moveMouse(game, view, evt) {
        let pos = evt.clientX - view.sceneLeft();
        this.__game.paddleMove(pos - paddleWidth / 2);
        view.displayPaddle(this.__game.paddle);
    }
}

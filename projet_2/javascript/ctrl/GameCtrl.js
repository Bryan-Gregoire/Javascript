/**
 * A facade for the controller.
 */
class GameCtrl {

    /**
     * Constructor of GameCtrl.
     * 
     * @param {*} game the given game.
     * @param {*} view the given view.
     */
    constructor(game, view) {
        this.__game = game;
        this.__view = view;
        this.__paddleCtrl = new PaddleCtrl(this.__game, this.__view);
        this.__ballCtrl = new BallCtrl(this.__game, this.__view);
    }

    /**
     * Start the game.
     * 
     */
    play() {
        this.__view.add(this.__game.ball);
        this.__view.add(this.__game.paddle);
        this.__view.addAll(this.__game.wall);
        this.__ballCtrl.start();
    }

    /**
     * Stop the game.
     * 
     */
    stop() {
        this.__ballCtrl.stop();
    }
}
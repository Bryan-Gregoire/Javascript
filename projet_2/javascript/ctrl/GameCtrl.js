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
        this.__ballCtrl = new BallCtrl(this.__game, this.__view, this);
    }

    /**
     * Start the game.
     * 
     */
    play() {
        this.__view.add(this.__game.ball);
        this.__view.add(this.__game.paddle);
        this.__view.addAll(this.__game.wall);
        this.__view.showLives(this.__game.player.live);
        this.__view.showScore(this.__game.player.score);
        this.__view.showCurrentLevel(this.__game.level);
        this.ballStartWait();
    }

    /**
     * Stop the game.
     * 
     */
    stop() {
        this.__ballCtrl.stop();
    }

    /**
     * The ball does not move until there is a click.
     * 
     */
    ballStartWait() {
        this.__view.showMessage("Click to start");
        $(document).mouseup(() => this.ballStart());
    }

    /**
     * Hide the message of the start and start the ball.
     * 
     */
    ballStart() {
        $(document).off("mouseup");
        this.__view.hideMessage();
        this.__ballCtrl.start();
    }
}
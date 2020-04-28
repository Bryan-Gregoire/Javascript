class GameCtrl {

    constructor(game, view) {
        this.__game = game;
        this.__view = view;
        this.__paddleCtrl = new PaddleCtrl(this.__game, this.__view);
        this.__ballCtrl = new BallCtrl(this.__game, this.__view);
    }

    play() {
        this.__ballCtrl.start();
    }

    stop() {
        this.__ballCtrl.stop();
    }
}
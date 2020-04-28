class GameCtrl {

    constructor(game, view) {
        this.__game = game;
        this.__view = view;
        this.__paddleCtrl = PaddleCtrl;
        this.__ballCtrl = BallCtrl;
    }

    play() {
        this.__ballCtrl.start();
    }

    stop() {
        this.__ballCtrl.stop();
    }
}
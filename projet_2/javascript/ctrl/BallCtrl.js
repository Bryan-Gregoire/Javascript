/** 
* Contrôleur de la balle.
* Propose des méthodes pour démarrer / arrêter la balle et la faire bouger.
*/
class BallCtrl {

    /**
   * @param { Ball } ball - la balle à contrôler
   * @param { View } view - la vue
   */
    constructor(game, view) {
        this._ball = game.ball;
        this._view = view;
        view.displayBall(this._ball);
    }

    /**
     * Démarre la balle.
     * 
     */
    start() {
        this._moveListener = setInterval(() => this.move(), 10);
    }

    /**
     * Déplace la balle d’un pas (défini par son mouvement) et rafraichit la vue.
     */
    move() {
        this._ball.move();
        this._view.displayBall(this._ball);
    }

    /**
     * Arrête la balle.
     */
    stop() {
        clearInterval(this._moveListener);
    }
}
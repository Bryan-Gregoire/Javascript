/**
 * The score and lives of the game.
 * 
 */
class Player {

    /**
     * Constructor of Player.
     * 
     * @param {*} score The score of the game.
     */
    constructor(score) {
        this._score = score;
    }

    /**
     * Get the score.
     * 
     */
    get score() { return this._score; }

    /**
     * Add points to the score.
     * 
     * @param {*} point the given points.
     */
    addToScore(point) {
         this._score = this._score + point;
    }
}
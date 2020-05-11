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
    constructor(score, live) {
        this._score = score;
        this._live = live;
    }

    /**
     * Get the score.
     * 
     */
    get score() { return this._score; }

    /**
     * Get the lives.
     * 
     */
    get live() { return this._live; }

    /**
     * Add points to the score.
     * 
     * @param {*} point the given points.
     */
    addToScore(point) { this._score = this._score + point; }

    /**
     * Lose a life.
     * 
     */
    hurt() { this._live = this._live - 1; }

    /**
     * Win a life.
     * 
     */
    winOneLive() {
        if (this._live < 5) {
            return this._live + 1;
        }
    }

    /**
     * Check if there are still lives.
     * 
     */
    death() { return this._live == 0; }
} 
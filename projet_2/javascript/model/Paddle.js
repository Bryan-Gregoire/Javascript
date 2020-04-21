/**
 * The paddle of the game.
 * 
 */
class Paddle {

    /**
     * The constructor of paddle.
     * 
     * @param {*} left 
     */
    constructor(left){
        this.__left = left;
    }

    /**
     * Get the left.
     * 
     */
    get left(){
        return this.__left;
    }

    /**
     * Set the left.
     * 
     * @param {*} left the left to set.
     */
    moveTo(left){
        this.__left = left;
    }
}
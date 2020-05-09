/**
 * View of the paddle.
 */
class View {

    /**
     * return the distance of any element of id unId compared 
     * at the left edge of the window.
     * 
     */
    sceneLeft() {
        return $("#scene").offset().left;
    }

    /**
     * Display a sprite in the game.
     * 
     * @param {*} sprite the given sprite to display.
     */
    add(sprite) {
        let item = $('<span>');
        $(item).attr("id", sprite.id);
        $(item).attr("class", sprite.type);
        $('#scene').append(item);
        $('#' + sprite.id).css('left', sprite.topLeft.x);
    }

    /**
     * Change the visual position of a sprite.
     * 
     * @param {*} sprite the given sprite.
     */
    update(sprite) {
        let item = sprite.id;
        $("#" + item).css('left', sprite.topLeft.x);
        $("#" + item).css('top', sprite.topLeft.y);
        $('#' + item).css('left', sprite.left);
    }

    /**
     * Display the wall in the game.
     * 
     * @param {*} sprite the given sprite.
     */
    addAll(sprite) {
        for (let i = 0; i < sprite.length; i++) {
            let item = $('<span>');
            let element = sprite[i];
            $(item).attr("id", element.id);
            $(item).attr("class", element.type);
            $(item).css("left", element.topLeft.x);
            $(item).css("top", element.topLeft.y);
            $('#scene').append(item);
        }
    }

    /**
     * Check the id to remove of the game of the given sprite.
     * 
     * @param {*} sprite the given sprite.
     */
    removeBricks(sprite) {
        for (let i = 0; i < sprite.length; i++) {
            $('#' + sprite[i].id).remove();
        }
    }

    /**
     * Display the score.
     * 
     * @param {*} score the given score.
     */
    updateScore(score) {
        $('#score').text(score);
    }

    /**
     * Hide the message of start.
     * 
     */
    hideMessage() {
        $('#message').hide();
    }

    /**
     * Show the given message.
     * 
     * @param {*} text The given message.
     */
    showMessage(text) {
        $('#message').show();
        $('#message').text(text);
    }

    /**
     * Show the score.
     * 
     * @param {*} score the given score. 
     */
    showScore(score) {
        $('#score').text(score);
    }

    /**
     * Show the lives.
     * 
     * @param {*} nbLives number of lives to show.
     */
    showLives(nbLives) {
        let lives = ""
        for (let i = 0; i < nbLives; i++) {
            lives = lives + "favorite ";
        }
        $('.material-icons').text(lives);
    }

    showCurrentLevel(nbLevel) {
        $('#level').text("Level: " + nbLevel);
    }
}
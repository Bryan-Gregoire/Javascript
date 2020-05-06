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
        let wall = sprite.topLeft;
        let i = 0;
        let j = 0;
        for (let index = 0; index < wall.length; index++) {
            let item = $('<span>');
            let element = wall[index];
            $(item).attr("id", i + "," + j);
            $(item).attr("class", "brick");
            $(item).css("left", element.__x);
            $(item).css("top", element.__y);
            $('#scene').append(item);
            if (j == BRICKX - 1) {
                i++;
                j = 0;
            } else {
                j++;
            }
        }
    }
}
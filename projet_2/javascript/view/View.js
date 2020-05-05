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

    add(sprite) {
        let item = $('<span>');
        $(item).attr("id", sprite.id);
        $(item).attr("class", sprite.type);
        $('#scene').append(item);
    }

    update(sprite) {
        let item = sprite.id;
        $("#" + item).css('left', sprite.topLeft.x);
        $("#" + item).css('top', sprite.topLeft.y);
        $('#' + item).css('left', sprite.left);
    }

    buildWall(sprite) {
        sprite = [];
        for (let left = 0; left < BRICKY; left++) {
            if (left > 0) {
                left = BRICKWIDTH + left - 1;
            } else {
                left = left;
            }
            for (let top = 0; top < BRICKX; top++) {
                if (top > 0) {
                    top = BRICKHEIGHT + top - 1;
                } else {
                    top = top;
                }
                sprite.push(new Brick(left, top));
            }
        }
        console.log("AVANT : " + sprite); 
        return sprite;
    }

    addAll(sprite) {
        sprite = this.buildWall(sprite);
        for (let i = 0; i < BRICKY; i++) {
            for (let index = 0; index < BRICKX; index++) {
                let item = $('<span>');
                $(item).attr("id", i + "," + index);
                $(item).attr("class");
                $(item).css("left", sprite[index].left);
                $(item).css("top", sprite[index].top);
                $('#scene').append(item);
            }
        }
    }
}
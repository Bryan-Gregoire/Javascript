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

    //addAll(sprite) {
       // for (let index = 0; index < BRICKY; index++) {
        //    for (let index = 0; index < sprite.length; index++) {
             //   element = sprite[index];
          //      $('#scene').push('element');
         //   }
      //  }
    //}
}
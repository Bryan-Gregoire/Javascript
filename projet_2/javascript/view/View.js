/**
 * View of the paddle.
 */
class View {

    /**
     * Display the paddle.
     * 
     * @param {*} paddle the paddle.
     */
    displayPaddle(paddle) {
        $('#raquette').css('left', paddle.left);
    }

    /**
     * return the distance of any element of id unId compared 
     * at the left edge of the window.
     * 
     */
    sceneLeft() {
        return $("#scene").offset().left;
    }

    /**
     * Display the ball.
     * 
     * @param {*} ball the ball.
     */
    displayBall(ball) {
        $("#balle").css('left', ball.topLeft.x);
        $("#balle").css('top', ball.topLeft.y);
    }
}
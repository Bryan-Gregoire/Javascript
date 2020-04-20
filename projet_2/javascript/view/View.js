class View {
    
    displayPaddle(paddle){
        $('#raquette').css('left', paddle.left);
    }

    sceneLeft(){
        return $("#scene").offset().left;
    }

}
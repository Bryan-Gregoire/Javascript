class Paddle {

    constructor(left){
        this.__left = left;
    }

    get left(){
        return this.__left;
    }

    moveTo(left){
        this.__left = left;
    }
}
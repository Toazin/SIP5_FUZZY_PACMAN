var pacmanInDrugs = true;
const LOWEST = 30;
const HIGHEST = 365;

function getPercent(val){
    return (HIGHEST * val) / 100
}

var getMovingState = function (distance) {
    var close  = new Trapezoid(distance, LOWEST-1, LOWEST, getPercent(30), getPercent(40)).getResult();
    var far  = new Trapezoid(distance, getPercent(30), getPercent(40), HIGHEST, HIGHEST).getResult();
    if(far <= .8 && close >= .2){
        console.log("ATACK");
        return true;
    }
    else {
        console.log("RANDOM");
        return false;
    }
}

//Function that takes action and counter and returns counter

function counterReducer(action, x){
    if(action == "INC"){
        x = x + 1;
    }
    if(action == "DEC"){
        x = x - 1;
    }

    return x;
}
//Call function counterRducer and print value to console
console.log(counterReducer("INC", 10));
console.log(counterReducer("DEC", 15));
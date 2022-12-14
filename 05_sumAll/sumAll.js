const sumAll = function(num1, num2) {
    let sumCount = 0;
    let start;
    let end;
    if(num1 < num2){
        start = num1;
        end = num2;
    }
    else if (num2 < num1){
        start = num2;
        end = num1;
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if(typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR"
    }
    for(let i = start; i <= end; i++){
        sumCount+= i;
    }
    return sumCount;
};

// Do not edit below this line
module.exports = sumAll;

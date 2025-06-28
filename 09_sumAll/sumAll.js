const sumAll = function(first, last) {
    let sum = 0;
    if(first < 0 || last < 0){
        return "ERROR";
    }
    else if(!(Number.isInteger(first) && Number.isInteger(last))){
        return "ERROR";
    }
    else if(first < last){
            for (let i = first; i <= last; i++){
                sum += i;
            }
            return sum;
        }
    else{
            for (let i = last; i <= first; i++){
                    sum += i;
                }
                return sum;
        }
};

// Do not edit below this line
module.exports = sumAll;

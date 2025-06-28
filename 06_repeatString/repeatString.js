const repeatString = function(str, times) {
    if(times < 0){
        return "ERROR";
    }
    else {
        let outString = "";
        for(let i = 0; i < times; i++){
            outString += str;
        }
    return outString;
    }
};

// Do not edit below this line
module.exports = repeatString;

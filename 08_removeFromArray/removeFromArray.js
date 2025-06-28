const removeFromArray = function(arr, ...theArgs) {
    // convert theArgs to array
    // loop through arr
    // for each item in arr loop through argsArr
    // if arr[i] in argsArr, remove the item
    // return arr
    let argsArr = Array.from(theArgs);
    for(let i = 0; i < arr.length; i++){
        if(argsArr.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

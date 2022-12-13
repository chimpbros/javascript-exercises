const removeFromArray = function(array, item) {
    let itemIndex = array.indexOf(item);
    let newArray = array.splice(itemIndex);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(array, ...args) {
    // iterate over array using filter method
    // return array that is not args item
    const removeItem = array.filter(item => {
        return !args.includes(item);
    });
    return removeItem;
};

// Do not edit below this line
module.exports = removeFromArray;

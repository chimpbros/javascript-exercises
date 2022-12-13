const reverseString = function(string) {
    let charArray = string.split('');
    let reverseString = charArray.reverse().join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

const reverseString = (string) => {
    let arr = string.split('');
    arr.reverse();
    let str = arr.join('');
    return str;
};

// Do not edit below this line
module.exports = reverseString;

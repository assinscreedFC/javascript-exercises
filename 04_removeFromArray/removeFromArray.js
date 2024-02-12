const removeFromArray = function(array,...value) {
    return array.filter(val=> !value.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

const reverseString = function(string) {
    const length=string.length;
    let result="";
    const array1=new Array(length);
    for (let i=0;i<length;i++) {
        array1[i]=string[length-1-i];
    }
array1.forEach(element => {result+=element});
    
return result;
};

// Do not edit below this line
module.exports = reverseString;

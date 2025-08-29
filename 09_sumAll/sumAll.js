const sumAll = function(min,max) {

//check if negative
if (min < 0 || max < 0 ) return "ERROR"

//array destructuring if bigger number first
if (min > max) [min, max] = [max, min];

//check if has decimal point
if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";


let length = (max-min)+1
let array = new Array(length).fill("thisIsNotImpt").map((item, index) => min + index)
return array.reduce((total,current) => total + current, 0)
};



// Do not edit below this line
module.exports = sumAll;

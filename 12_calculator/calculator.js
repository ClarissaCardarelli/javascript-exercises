const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

// const sum = function (array) {
//   let sum = 0;
//   for (let item of array) {
//     sum += item;
//   }
//   return sum;
// };

const sum = function (array) {
return array.reduce((total,current)=> total+current, 0)
};

// const multiply = function (array) {
// let sum = 1;
// for (let item of array){
//   sum *= item
// }
// return sum;
// };

const multiply = function (array) {
return array.reduce((total,current)=> total*current, 1)
};

const power = function (a, b) {
  return Math.pow(a, b);
};


const factorial = function(num) {

let sum = 1;
for (let i = 1; i <= num; i++){
sum *= i
}
return sum
};






// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

const removeFromArray = function (array, ...number) {

  let dontWant = [...number]

  let filtered = [];

  for (let item of array) {
    if (dontWant.includes(item)) {
      continue;
    }
    
    filtered.push(item);
  }
  return filtered;
};


// Do not edit below this line
module.exports = removeFromArray;

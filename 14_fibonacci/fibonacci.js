const fibonacci = function(n) {
  let array = [0,1];
  if (typeof(n) === "string"){
    n = Number(n)
  }

  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      let itemValue = array[i - 2] + array[i - 1];
      array.push(itemValue);
    }

    console.log(array)
    let fibValueAtN = array.splice(n, 1)[0]

    return fibValueAtN
  }
};

// Do not edit below this line
module.exports = fibonacci;

const convertToCelsius = function (f) {
  let c = (f - 32) * (5 / 9);

  if (c % 1 !== 0) {      // check if there’s a decimal
    return +c.toFixed(1); // keep 2 decimal places
  }
  return c;             // leave integers unchanged
};

const convertToFahrenheit = function (c) {
  let f = c * (9 / 5) + 32;
  if (f % 1 !== 0) {      // check if there’s a decimal
    return +f.toFixed(1); // keep 2 decimal places
  }
  return f;               // leave integers unchanged
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



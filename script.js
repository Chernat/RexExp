//Task 1

var time = '23:24';

console.log(time.match(/2[0-3]:[0-5]\d|[0-1]*\d:[0-5]\d/));

//Task 2

var arithmetic = '1 + 2',
    arithmeticTwo = '-3 / 3',
    arithmeticThree = '-3 3'

console.log(arithmetic.match(/(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/));
console.log(arithmeticTwo.match(/(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/));
console.log(arithmeticThree.match(/(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/));

//Taks 3

function createURL(templateUrl, params) {
  for (var key in params) {
    templateUrl = templateUrl.replace('{' + key + '}', params[key]);
  }
  return templateUrl;
}

let url = createURL(
  `/api/countries/{country}/regions/{region}/`,
  { country: `Ukraine`, region: `Kiev`}
);
console.log(url);

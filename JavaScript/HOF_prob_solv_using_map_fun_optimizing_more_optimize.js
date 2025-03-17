const radius = [1, 2, 3, 4];

console.log(radius.map(function circumfrence(y){return 2 * Math.PI* y}));
console.log(radius.map(function area(x) {
  return Math.PI * x * x;
})) // the same code here i passed the whole  function isnside the the map
const radius = [1, 2, 3, 4];

const area = function(radius) {
  return Math.PI * radius * radius;
}

const circumfrence = function(radius) {
  return 2 * Math.PI * radius;
}
 // map function take callback function as argument and return and array and also itterate array in the inde 
// it will iterate the array of radius and return in array.
console.log(radius.map(area)); // by using map function i have  reduced the code
console.log(radius.map(circumfrence));



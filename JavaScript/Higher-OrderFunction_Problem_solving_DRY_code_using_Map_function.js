const radius = [1, 2, 3, 4];

const area = function(radius) {
  return Math.PI * radius * radius;
}

const circumfrence = function(radius) {
  return 2 * Math.PI * radius;
}
 const calculateArea = radius.map(area)
 const calculatecircumfrence = radius.map(circumfrence)
 console.log(calculateArea);
 console.log(calculatecircumfrence);
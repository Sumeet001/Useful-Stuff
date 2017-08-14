var array = [1, 2, 3, 4, 5];

var chars = ['a', 'b'];

var newArray = [...array, ...chars];

console.log(array); //[1,2,3,4,5] 
console.log(...array); //1,2,3,4,5 ES6
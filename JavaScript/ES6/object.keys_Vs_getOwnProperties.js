//There is a little difference. Object.getOwnPropertyNames(a) 
//returns all own properties of the object a. Object.keys(a) 
//returns all enumerable own properties. 
//It means that if you define your object properties without 
//making some of them enumerable: false these two methods will give 
//you the same result.
var a = {};
Object.defineProperties(a, {
    one: {
        enumerable: true,
        value: 'one'
    },
    two: {
        enumerable: false,
        value: 'two'
    },
});
Object.keys(a); // ["one"]
Object.getOwnPropertyNames(a); // ["one", "two"]
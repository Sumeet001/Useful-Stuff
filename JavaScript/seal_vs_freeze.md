2: Seal :

It is same as prevent extension, in addition to this also prevent existing properties and methods from being deleted.
To seal an object, we use Object.seal() method. you can check whether an object is sealed or not using Object.isSealed();

var employee = {
	name: "Nishant"
};

// Seal the object 
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true

delete employee.name // fails silently unless it's in strict mode

// Trying to add new property will give an error
employee.age = 30; // fails silently unless in strict mode
when an object is sealed, its existing properties and methods can't be removed. Sealed object are also non-extensible.

3: Freeze :

Same as seal, In addition to this prevent existing properties methods from being modified (All properties and methods are read only).
To freeze an object, use Object.freeze() method. We can also determine whether an object is frozen using Object.isFrozen();

var employee = {
	name: "Nishant"
};

//Freeze the object
Object.freeze(employee); 

// Seal the object 
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee));     // true
console.log(Object.isFrozen(employee));     // true


employee.name = "xyz"; // fails silently unless in strict mode
employee.age = 30;     // fails silently unless in strict mode
delete employee.name   // fails silently unless it's in strict mode
Frozen objects are considered both non-extensible and sealed.

Recommended:

If you are decided to prevent modification, sealed, freeze the object then use in strict mode so that you can catch the error.

For Example:

"use strict";

var employee = {
	name: "Nishant"
};

//Freeze the object
Object.freeze(employee); 

// Seal the object 
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee));     // true
console.log(Object.isFrozen(employee));     // true


employee.name = "xyz"; // fails silently unless in strict mode
employee.age = 30;     // fails silently unless in strict mode
delete employee.name;  // fails silently unless it's in strict mode
var person = {
    name: 'John',
    age: 24
}

var location = {
    addressLine1: 'Some Location x',
    addressLine2: 'Some Location y',
    city: 'NewYork'
}

function merge(toObj, fromObj) {
    return Object.assign(person, location);
}
"use strict";
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
assert(maybePerson != null, 'Could not load Person');
console.log('Name: ', maybePerson.name);
function loadPerson() {
    throw new Error("Function not implemented.");
}

"use strict";
function log(animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}
class Cat2 {
    name;
    constructor(name) {
        this.name = name;
    }
    voice() { return 'meow'; }
}
class Dog2 {
    name;
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'woof woof';
    }
}

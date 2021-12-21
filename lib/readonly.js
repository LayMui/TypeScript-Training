"use strict";
class Animal {
    name; // can combine with public access modifier
    constructor(name) {
        this.name = name;
    }
}
const sheep = new Animal('sheep');
console.log(sheep.name); // Allow
//sheep.name = 'wolf' // Disallow

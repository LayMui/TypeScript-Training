"use strict";
class Man {
    name;
    age;
    // public name: string;
    // public age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
}
const adam = new Man('Adam', 120000);
console.log(adam.name, adam.age);

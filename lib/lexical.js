"use strict";
class Person {
    _age;
    constructor(_age) {
        this._age = _age;
    }
    // Arrow function in JS captured ths this from the surrounding context
    growOld = () => {
        this._age++;
    };
    // growOld() {
    //   this._age++
    // }
    age() {
        return this._age;
    }
}
const person = new Person(0);
for (let i = 0; i < 20; i++) {
    person.growOld();
}
console.log('age: ', person.age());

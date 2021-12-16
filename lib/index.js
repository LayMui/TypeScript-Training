"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = 'Hello World';
console.log(message);
// Primitive Types
let isPresent = false;
let magic = 66.8;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
let biggy = BigInt(9007199254740991);
// Built in class in JS and annotate using the class name
let regexp = new RegExp('ab+c');
let array = [1, 2, 3]; // Pass in generic argument Array<number> array of type number
let set = new Set([1, 2, 3]);
// User created Class
class Queue {
    data = [];
    push(item) { this.data.push(item); }
    ;
    pop() { return this.data.shift(); }
}
let queue = new Queue(); // A queue of type number
// Array 
let array1 = [1, 2, 3];
let array2 = [1, 3, 4];
// Tuple - fixed length
let tuple2 = [0, 0];
let tuple3 = [0, 0, 0];
// usage
tuple2 = [1, 2];
tuple3 = [1, 2, 5];
// JS Objects
let center = {
    x: 0,
    y: 0
};
let center2 = {
    x: 0,
    y: 1,
};
// Function
function add(a, b) {
    return a + b;
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let total = sum(1, 2);
console.log('TOTAL 1:' + total);
total = sum(1, 2, 3);
console.log('TOTAL 2:' + total);
let add1;
let add2;
add2 = function (a, b) {
    return a + b;
};
add2 = (a, b) => a + b; // use short-hand Arrow function
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
point2D = point3D;
function takesPoint2D(point) {
}
takesPoint2D(point3D);
// Class
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} move`);
    }
}
let cat = new Animal('Cat');
// Class support inheritance
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} fly`);
    }
}
// Type Assertion: to tell TS compiler the type of a variable 
// without having to do any of the type inference
function load() {
    console.log('loading');
    return 'loading';
}
let hello2 = load();
const trimmed = hello2.trim();
let hello3 = load();
const trimmed2 = hello3.trim();

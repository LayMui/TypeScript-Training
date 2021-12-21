"use strict";
let notDefined = undefined;
let notPresent = null;
class Point {
    x;
    y;
    // x: number;
    // y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const center = new Point(0, 0);
center.x = 1;
center.y = 15;
console.log(center.x, center.y); //0, undefined
function logVowels(value) {
    console.log(value.match(/[aeiou]/gi));
}
logVowels('hello');
logVowels('sky');

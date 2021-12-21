"use strict";
function double() {
    this.value = this.value * 2;
}
const valid = {
    value: 10,
    double,
};
valid.double();
console.log(valid.value);
const invalid = {
    value: 5,
    double
};
invalid.double();
console.log(invalid.value);

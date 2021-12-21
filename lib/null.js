"use strict";
function decorate(value) {
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`;
}
console.log(decorate('Hello'));
console.log(decorate('Hello World   '));
console.log(decorate(null));
console.log(decorate(undefined));

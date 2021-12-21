"use strict";
const fail = (message) => {
    throw new Error(message);
};
const sing = function () {
    while (true) {
        console.log('Never gonna give you up');
        console.log('Never gonna give you up');
        console.log('Never gonna give you up');
        console.log('Never gonna give you up');
        console.log('Never gonna give you up');
    }
};
let example;
function area2(s) {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    else if (s.kind === 'rectangle') {
        return s.width * s.height;
    }
    const _ensureAllCasesAreHandled = s;
    return _ensureAllCasesAreHandled;
}

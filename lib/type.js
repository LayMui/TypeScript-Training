"use strict";
function area(shape) {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    //if ('width' in shape) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
}
area({ kind: 'square', size: 2 });
area({ kind: 'rectangle', width: 2, height: 3 });

type Square = {
 kind: 'square' // discriminated type
 size: number,
};

type Rectangle = {
  kind: 'rectangle' // discriminated type
  width: number
  height: number
}

type Shape = 
| Square 
| Rectangle;

function area(shape: Shape) {
 if (shape.kind === 'square') {
  return shape.size * shape.size;
 }

 //if ('width' in shape) {
  if (shape.kind === 'rectangle') {
  return shape.width * shape.height;
 }
}

area({kind: 'square', size: 2});

area({kind: 'rectangle', width: 2, height: 3});
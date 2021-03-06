// We declare an instance of point and then 
// create a function to initialize this instance

type Point1 = {
 x: number, 
 y: number,
}
let point1: Point1;

function initialize() {
 point1 = { x: 0, y: 0}
}

initialize();

// it assume at the point may or may not still be undefined
// TS does not do deep code flow analysis
//console.log('After initialization ' + point1.x, point1.y) // compile error
console.log('After initialization ' + point1!.x, point1!.y) // ! is non-null assertion


// Rewrite to get rid of non-null assertion
let point2: Point1

function initialize1(): Point1 {
  return { x: 0, y: 0 }
}

const point3 = initialize1();
console.log('After initialization: ' + point3.x, point3.y)

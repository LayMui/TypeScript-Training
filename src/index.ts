import { createDebuggerStatement, ImportsNotUsedAsValues } from "typescript";

let message: string = 'Hello World'
console.log(message)



// Primitive Types
let isPresent: boolean = false;
let magic: number= 66.8;
let hello: string = 'world';
let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
let biggy: bigint = BigInt(9007199254740991)


// Built in class in JS and annotate using the class name
let regexp: RegExp = new RegExp('ab+c')

let array: Array<number> = [1,2,3]; // Pass in generic argument Array<number> array of type number

let set: Set<number> = new Set([1,2,3])

// User created Class
class Queue<T> {
 private data: Array<T> = [];
 push(item: T) { this.data.push(item)};
 pop(): T | undefined { return this.data.shift()}
}

let queue: Queue<number> = new Queue(); // A queue of type number

// Array 
let array1: Array<number> = [1,2,3]
let array2: number[] = [1, 3, 4]  

// Tuple - fixed length
let tuple2: [ number, number] = [0,0]
let tuple3: [number, number, number] = [0, 0, 0]

// usage
tuple2 = [1,2]
tuple3 = [1,2, 5]

// JS Objects
let center: { x: number, y: number} = {
 x: 0,
 y: 0
}

// Type alias
// Allow us to name our intent and remove duplication
type Point = { x: number, y: number};

let center2: Point = {
 x: 0,
 y: 1,
}

 // Function
 function add(a: number, b: number) {
  return a + b
 }

 function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current});
  
 }

 let total = sum(1, 2)
 console.log('TOTAL 1:' + total)

 total = sum(1, 2, 3)
 console.log('TOTAL 2:' + total)


 // First class function: store function in a variable
 type Add = (a: number, b: number) => number; // type alias
 let add1: (a:number, b:number) => number;
 let add2: Add;

 add2 = function(a: number, b: number): number {
  return a + b
 }

 add2 = (a, b) => a + b; // use short-hand Arrow function

 // Duck Typing
 type Point2D = {x: number, y: number}
 type Point3D = {x: number, y: number, z: number}

 let point2D: Point2D = { x: 0, y: 10}
 let point3D: Point3D = { x: 0, y: 10, z: 20 }

 point2D = point3D;
 
 function takesPoint2D(point: Point2D) {
 }

 takesPoint2D(point3D)

 // Class
 class Animal {
  protected name: string;

  constructor(name: string) {
   this.name= name;

  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} move`)
  }
 }

 let cat = new Animal('Cat')


 // Class support inheritance
class Bird extends Animal{
    fly(distanceInMeters: number) {
        console.log(`${this.name} fly`)
    }
}

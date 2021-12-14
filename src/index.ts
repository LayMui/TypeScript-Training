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
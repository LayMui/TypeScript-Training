export type Point = {
 x: number, 
 y: number, 
 z: number,
};

// part of TS
// type Readonly<T> = {
//  readonly [Item in keyof T]: T[Item]
// };

const center: Readonly<Point> = {
 x: 0, 
 y: 0,
 z: 0
};

// compilation error center.x = 100;
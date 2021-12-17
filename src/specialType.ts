let notDefined: undefined = undefined;
let notPresent: null = null;

class Point {
 // x: number;
 // y: number;
 constructor(public x: number, public y: number) {
    
 }
}

const center = new Point(0,0);
center.x = 1;
center.y = 15;
console.log(center.x, center.y) //0, undefined

function logVowels(value: string) {
 console.log(value.match(/[aeiou]/gi))
}


logVowels('hello');
logVowels('sky')
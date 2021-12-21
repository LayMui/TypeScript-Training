const fail = (message: string) => {
 throw new Error(message);
}

const sing = function() {
 while(true) {
  console.log('Never gonna give you up');
   console.log('Never gonna give you up')
    console.log('Never gonna give you up')
     console.log('Never gonna give you up')
      console.log('Never gonna give you up')
 }
}

let example: never

type Square2 = {
 kind: 'square'
 size: number,
}

type Rectangle2 = {
 kind: 'rectangle',
 width: number, 
 height: number
}

type Shape2 = 
 | Square2 
 | Rectangle2

 function area2(s: Shape2) {
  if (s.kind === 'square') {
   return s.size * s.size;
  } else if (s.kind === 'rectangle') {
   return s.width * s.height;
  }
  const _ensureAllCasesAreHandled: never = s;
  return _ensureAllCasesAreHandled;
 }
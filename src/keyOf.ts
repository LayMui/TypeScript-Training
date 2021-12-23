type Person3 = {
 name: string, 
 age: number, 
 location: string
}

const james: Person3 = {
name: 'James',
age: 54,
location: 'Singapore'
}

//function logGet(obj: any, key: string) {
// function logGet(obj: any, key:'name' | 'age' | 'location') {
 function logGet<Obj, Key extends keyof Obj>(obj: Obj, key:Key) {
//  function logGet(obj: any, key: PersonKeys) {
   const value = obj[key]
   console.log('Getting: ', key, value)
   return value
 }

const age = logGet(james, 'age')
console.log(age)
//console.log(logGet(james, 'email')); // error

type PersonKeys = keyof Person3

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key]) {
 console.log('Setting: ', key, value);
 obj[key] = value
}

logSet(james, 'age', 36)
console.log(james.age)
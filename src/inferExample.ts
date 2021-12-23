export function createPerson(firstName: string, lastName: string) {
 return {
  firstName, 
  lastName, 
  fullName: `${firstName} ${lastName}`
 };
}

// Part of the TS compiler
// type ReturnType<T> = 
//  T extends (...args: any) => infer R
//  ? R
//  : never;


// Type alias
 type Person = ReturnType<typeof createPerson>;

 // Application: When the input of a function logPerson depend on the
 // output of another function: createPerson
 // we can do it inline
 function logPerson(person: ReturnType<typeof createPerson>) {
//function logPerson(person: Person) {
 console.log('Person: ', 
 person.firstName, 
 person.lastName, 
 person.fullName);
}
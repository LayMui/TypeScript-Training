type Person2 = {
 name: string,
 dateOfBirth?: Date
}


function assert(condition: unknown, message: string): asserts condition {
 if(!condition) throw new Error(message);
}



assert(maybePerson != null, 'Could not load Person');

console.log('Name: ', maybePerson.name)

function loadPerson() {
 throw new Error("Function not implemented.");
}

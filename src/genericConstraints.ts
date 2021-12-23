// Create Type alias to keep our code clean

type NameFields = { firstName: string, lastName: string};


// T extends NameFields: we are saying that type T must have all members
// that are present in the type NameFields
function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  }
}

const john = addFullName({
 email: 'john@example.com',
 firstName: 'John',
 lastName: 'Doe'
})

console.log(john.email)


console.log(john.fullName)
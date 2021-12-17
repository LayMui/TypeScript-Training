type PersonLocal = {
 name: string,
 email?: string | null | undefined
}

function sendEmail(email: string) {
 console.log('Sent email to', email);
}

function ensureContactable(person: PersonLocal) {
 if (person.email == null) 
 throw new Error(`Person ${person.name} is not contactable`)
}

function contact(person: PersonLocal) {
 ensureContactable(person);
 sendEmail(person.email!) // nonnull-assertion
}
"use strict";
function sendEmail(email) {
    console.log('Sent email to', email);
}
function ensureContactable(person) {
    if (person.email == null)
        throw new Error(`Person ${person.name} is not contactable`);
}
function contact(person) {
    ensureContactable(person);
    sendEmail(person.email); // nonnull-assertion
}

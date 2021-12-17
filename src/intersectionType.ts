type Point2D = {
 x: number, 
 y: number,
}

type Point3D = Point2D & {
 z: number
}

type PersonName = {
 name: string,
}

type Email = {
 email: string,
}

type Phone = {
 phone: string
}

type ContactDetails = 
& PersonName & Email & Phone;

function contact(details: ContactDetails ) {
 console.log(`Dear ${details.name}.
 I hope you received our email at ${details.email}.
 We will call you at ${details.phone} shortly`)
}
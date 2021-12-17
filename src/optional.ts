type PersonDetails = {
 name: string, 
 email: string,
 phone?: string
}

const bruce: PersonDetails = {
 name: 'Bruce',
 email: 'blackbelt@kowloon.com',
 phone: '911'
}

const alfred: PersonDetails = {
 name: 'Alfred',
 email: 'alfred@singapore.com'
};

console.log(alfred.phone)


class PointXY {
 x?: number | null;
 y?: number;
}

const point = new PointXY(); //becos the members x and y is optional
point.x = 0
point.x = undefined

console.log(point.x) //undefined

point.x = null  // need to add it as a possible value in the member x
console.log(point.x) //null
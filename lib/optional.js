"use strict";
const bruce = {
    name: 'Bruce',
    email: 'blackbelt@kowloon.com',
    phone: '911'
};
const alfred = {
    name: 'Alfred',
    email: 'alfred@singapore.com'
};
console.log(alfred.phone);
class PointXY {
    x;
    y;
}
const point = new PointXY(); //becos the members x and y is optional
point.x = 0;
point.x = undefined;
console.log(point.x); //undefined
point.x = null; // need to add it as a possible value in the member x
console.log(point.x); //null

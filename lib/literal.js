"use strict";
//let direction: 'North' | 'South' | 'West' | 'East'
let direction;
direction = 'North';
direction = "West";
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
for (let i = 0; i < 20; i++) {
    console.log(rollDice());
}

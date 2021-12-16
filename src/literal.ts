
type CardinalDirection = 'North' | 'East' | 'South' | 'West'

//let direction: 'North' | 'South' | 'West' | 'East'

let direction: CardinalDirection
direction = 'North'
direction = "West"


type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
 return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

for (let i=0;i<20; i++) {
 console.log(rollDice())
}
type Animal2 = {
 name: string,
 voice(): string,
}

function log(animal: Animal2) {
 console.log(`Animal ${animal.name}: ${animal.voice()}`)
}

class Cat2 implements Animal2 {
 constructor(public name: string) {

 }
 voice() { return 'meow'}
}

class Dog2 implements Animal2 {
  constructor(public name: string) {}
  voice() {
    return 'woof woof'
  }
}
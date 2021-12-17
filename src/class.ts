class Cat {
 meow() {
  console.log('meow')
 }
}

class Dog {
 bark() {
  console.log('woof')
 }
}

type Pet = Cat | Dog;

function speak(animal: Pet) {
 if (animal instanceof Cat) {
  animal.meow();
 }

 if (animal instanceof Dog) {
  animal.bark();
 }
}
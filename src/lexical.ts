class Person {
  private _age: number
  constructor(_age: number) {
    this._age = _age
  }

  // growOld = () => {
  //   this._age++
  // }

  growOld() {
    this._age++
  }

  age() {
    return this._age
  }
}

const person = new Person(0);

for(let i=0; i<20;i++) {
 person.growOld();
}

console.log('age: ', person.age());
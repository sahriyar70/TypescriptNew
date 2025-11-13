// oop class - object 

 class Animal {
    constructor (public name : string, public species : string, public sound : string)  // property declare in constructor 

    {

    }
    makeSound()  {
        console.log(`the ${this.name} says ${this.sound}`);
    }

 }

    const dog = new Animal("dog", "canine", "woof woof");
    const cat = new Animal("cat", "feline", "meow meow");
    const cow = new Animal("cow", "bovine", "moo moo");

    console.log(dog, cat, cow);
    dog.makeSound();
    cat.makeSound();
    cow.makeSound();
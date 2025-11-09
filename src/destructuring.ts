const user = {
    name: "sahriyar",
    age: 23,
    address: "bangladesh",
    friendnames: { friend1: "ahmad", friend2: "ali", friend3: "khan" }
};

 const { name, age, address : bari, friendnames: { friend1, friend2, friend3 } } = user;  // destructuring ,type aliasing

console.log(`User Name is ${name}`);

console.log(bari);

 const friends = [ "ahmad", "ali", "khan", "umer", "salman" ]; 
    const [ friendA, friendB, , friendD ] = friends; // destructuring 

    console.log(friend1,friend2);
    
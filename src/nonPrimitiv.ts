// arry - object - function - date
// tuple - enum - any - unknown - void - never 

let person : string[] = ["sahriyar", "ahmad", "ali"];

person.push("khan"); 
// person.push(474); // error
person.pop();
console.log(person);

let perso2 :  [string, number, boolean] = ["sahriyar", 474, true]; // tuple 

perso2.push("khan"); 
perso2.push( false); 
perso2.push(999); 
perso2.push("hello");
perso2.pop();
console.log(perso2); 
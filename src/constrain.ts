// constrain in generic

type user = { // interface can also be used
    id : number;
    name : string;
    age : number;
    address : string;

}
const getuser = <T extends user>(input : T) => { // constrain applied
    console.log(`user id is ${input.id}`);
    console.log(`user name is ${input.name}`);
    console.log(`user age is ${input.age}`);
    console.log(`user address is ${input.address}`);
}
const user1 = {
    id : 474,
    name : "sahriyar",
    age : 23,
    address : "bangladesh"
}
const result1 = getuser(user1);
const user2 = {
    id : 475,
    name : "ahmad", 
    age : 25,

}
// const result2 = getuser(user2);// error address is missing

console.log(result1);
// console.log(result2);

// type interface in ts 

interface Iuser {
    name : string;
    age : number;
    isAdmin ?: boolean; // optional property
}       
const user1 : Iuser = {
    name : "sahriyar",
    age : 23,
    isAdmin : true  
};

const user2 : Iuser = {
    name : "ahmad",
    age : 25
};  
console.log(user1);
console.log(user2); 
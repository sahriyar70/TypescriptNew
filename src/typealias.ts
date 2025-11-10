type User = {id :number  // type alias
    name :{
        firstName : string;
        lastName : string;
    },
    age : number;
    address : string;
    gender : "male" | "female";
}


const user : User  = { // using type alias
    id : 474,
    name : {
        firstName : "Sahriyar",
        lastName : "Ahmad"
    },
    age : 23,
    address : "Bangladesh",
    gender : "male"
} 



const user2 : User = { // using type alias
    id : 474,
    name : {
        firstName : "Sahriyar",
        lastName : "Ahmad"
    },
    age : 23,
    address : "Bangladesh",
    gender : "male"
} 


console.log(user);
console.log(user2);




//  keyof Constraint 

type  trrafic = {
 car : string; // key type
 bus : string;
 bike : string; 
}

type ourtrafic = "car" | "bus" | "bike" ; 

type ourtrafic1 = keyof trrafic ; // keyof constraint
const mycar : ourtrafic1 = "car"; 
 const mybus : ourtrafic1 = "bus";
    const mybike : ourtrafic1 = "bike"; 

   // const mybicycle : ourtrafic = "cycle"; // error because cycle is not assignable to ourtrafic type

console.log(mycar);

type User = {
    id : number;
    name : string;
    age : number;
    address : {
        city : string;
        country : string;
    }
}

const user : User = {
    id : 474,
    name : "sahriyar",
    age : 23,
    address :{
        city : "dhaka",
        country : "bangladesh"

    }
}
     
const getProperty = (obj: User, key: keyof User) => { // constrain key to string
    return obj[key]; // keyof constraint used here
}

const getProperty2 = <X>(obj: X, key: keyof X) => { //  keyof constraint with generic
    return obj[key]; // keyof constraint used here
}

const userName = getProperty(user, "name");

const userAge = getProperty(user, "age");
console.log(`User Name is ${userName}`);
console.log(`User Age is ${userAge}`);

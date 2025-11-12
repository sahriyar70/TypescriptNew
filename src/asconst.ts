
const user = {
    id : 474,
    name : "sahriyar",
    age : 23,
    address : "bangladesh"
} as const; // all properties are readonly now

// user.id = 475; // error

const getuser = (input : keyof typeof user) => {
    if(input === "id"){
        console.log(`user id is ${user.id}`);
    } else if(input === "name"){
        console.log(`user name is ${user.name}`);
    } else if(input === "age"){
        console.log(`user age is ${user.age}`);
    } else if(input === "address"){
        console.log(`user address is ${user.address}`);
    } 
}

getuser("name");
getuser("age"); 
getuser("id");
getuser("address");
// getuser("isAdmin"); // error not exist in user object 

// union of ts

type user = "addmin" | "user" | "super-admin"; // union type alias

const getDesboard = (role : user) => {
    if(role === "addmin"){

        console.log("You have full access"); } 
    
    else if(role === "super-admin"){

        console.log("You have super access");  } }

getDesboard("addmin");
getDesboard("super-admin");
getDesboard("user");
// getDesboard("guest"); // error because guest is not in union typep
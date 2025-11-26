
// generic.ts
// generic function in ts
 type genericArray<T> = Array<T>; 

    const friend : genericArray<string> = ["sahriyar", "ahmad", "ali"];
    const rollNumbers : genericArray<number> = [1,2,3,4,5];
    friend.push("khan");
    // friend.push(474); // error
    rollNumbers.push(6); 
    // rollNumbers.push("umer"); // error
    console.log(friend); 
    console.log(rollNumbers);
     
    // object generic 
    interface IGenericObj<T, U> {
        name : T;
        age : U;
    }   

    const user1 : IGenericObj<string, number> = {
        name : "sahriyar",
        age : 23
    }; 
    const user2 : IGenericObj<number, string> = {   
        name : 474,
        age : "ahmad"
        // isAdmin : true // error 
    }; 
    
    console.log(user1);
    console .log(user2);    
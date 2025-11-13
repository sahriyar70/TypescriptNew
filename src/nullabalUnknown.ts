 
 // nullabalUnknown.ts

 const getuser = (input : string | null) => {
    if(input){
        console.log(`user name is ${input}`);

    } else {
        console.log("no user found");
    }  }

    getuser(null);
    getuser("sahriyar");

    const getuser2 = (input : unknown) => {
        if(typeof input === "string"){
            console.log(`user name is ${input}`);   
        } else {
            console.log("no user found");
        }  }

    getuser2(null);
    getuser2("sahriyar");
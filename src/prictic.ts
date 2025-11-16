// enum of ts

    enum Role { 
        Admin = "admin",
        User = "user",
        SuperAdmin = "super-admin"
    }

    const getDesboard = (role : Role) => {
        if (role === Role.Admin){
            console.log("You have full access");
        } 
        else if(role === Role.SuperAdmin){
            console.log("You have super access");
        } 
    } 
     console.log (getDesboard(Role.Admin)); // need exprimental flag to see the value in console/terminal / try tsc --target es6 filename.ts
    getDesboard(Role.SuperAdmin);
    getDesboard(Role.User); 
    // getDesboard("guest"); // error because guest is not in enum type 
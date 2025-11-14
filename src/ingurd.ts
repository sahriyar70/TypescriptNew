
type NomalUser = {
    name : string;
}

type AdminUser = {
    name : string;
    role : "admin" ;
}

const getUserInfo = (user : NomalUser | AdminUser) => {
    if("role" in user){
        return `i am an ${user.role} and my name is ${user.name}`;
    } else {
        return `i am a normal user and my name is ${user.name}`;
    }  }

console.log(getUserInfo({name : "sahriyar"}));
console.log(getUserInfo({name : "ahmad", role : "admin"})); 
//console.log(getUserInfo({name : "john", role : "user"})); // error role can only be admin
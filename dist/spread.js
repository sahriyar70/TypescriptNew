"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Friends = ["rahimul", "karim", "salim", "anwar", "kamal", "jamal"];
const schoolFields = ["rahim", "karim", "salim"];
const collegeFields = ["anwar", "kamal", "jamal"];
const allFriends = [...Friends, ...schoolFields, ...collegeFields];
//console.log(allFriends); 
Friends.push(...schoolFields, ...collegeFields);
console.log(Friends);
const user = {
    name: "sahriyar",
    age: 23,
    address: "bangladesh"
};
const updatedUser = {
    job: "developer",
    age: 24,
    address: "dhaka, bangladesh"
};
const newUser = { ...user, ...updatedUser };
console.log(newUser);
//# sourceMappingURL=spread.js.map
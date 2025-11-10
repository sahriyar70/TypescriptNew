"use strict";
// union of ts
Object.defineProperty(exports, "__esModule", { value: true });
const getDesboard = (role) => {
    if (role === "addmin") {
        console.log("You have full access");
    }
    else if (role === "super-admin") {
        console.log("You have super access");
    }
};
getDesboard("addmin");
getDesboard("super-admin");
getDesboard("user");
// getDesboard("guest"); // error because guest is not in union typep
//# sourceMappingURL=union.js.map
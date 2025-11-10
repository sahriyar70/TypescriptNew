"use strict";
// Nomal function
// Arrow function
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    return num1 + num2;
}
console.log(addNormal(4, 5));
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(6, 7));
// function with optional parameter
// function - object - me1thod
const poorUser = {
    name: "sahriyar",
    balence: 474,
    addBalence(value) {
        const totalbalence = this.balence + value;
        return totalbalence;
    }
}; // object method , method inside object
poorUser.addBalence(526);
console.log(poorUser.addBalence(526));
// arro fuqnction 
const arr = [4, 5, 6, 7, 8];
const squArry = arr.map((element) => element * element);
console.log(squArry);
//# sourceMappingURL=Function.js.map
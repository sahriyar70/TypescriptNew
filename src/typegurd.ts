
type AlphaNumeric = string | number;

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    } }  

console.log(add(10, 20));
console.log(add("hello ", "world"));
console.log(add(10, " apples")); 